import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {SnackBarService} from '../../../core/services/snack-bar-service';
import {ApiResponse} from '../Models/ApiResponse';
import {UserProfile} from '../Models/UserProfile';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {

  entityPath: string = " https://localhost:7000/entity/api/profil/"

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: SnackBarService
  ) {
  }

  getUserProfile(entityId: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse<UserProfile>>(`${this.entityPath}${entityId}`, {withCredentials: true}).pipe(
      map((response) => {
          if (!response.isSuccess && response.statusCode !== 404) {
            this.snackBar.error(`Something was wrong ! \nError code : ${response.statusCode}\n ErrorMessage: ${response?.message} `);
          }
        return response;
      }));
  }

  createNewProfile(profile:Partial<UserProfile>):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.entityPath}new`, profile, {withCredentials: true}).pipe(
      map((response:ApiResponse)=>{
        if(!response.isSuccess) {
          this.snackBar.error(`Something was wrong when create profile ! \nError code : ${response.statusCode}\n ErrorMessage: ${response?.message} `);
        }
          return response;
      })
    );
  }
  updateProfile(profile:Partial<UserProfile>):Observable<ApiResponse>{
    return this.http.put<ApiResponse>(`${this.entityPath}update`, profile, {withCredentials: true}).pipe(
      map((response:ApiResponse)=>{
        if(!response.isSuccess) {
          this.snackBar.error(`Something was wrong when update profile ! \nError code : ${response.statusCode}\n ErrorMessage: ${response?.message} `);
        }
          return response;
      })
    );
  }



}


