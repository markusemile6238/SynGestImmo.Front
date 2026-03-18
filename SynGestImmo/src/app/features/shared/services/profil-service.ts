import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {SnackBarService} from '../../../core/services/snack-bar-service';
import {ApiResponse} from '../Models/ApiResponse';
import {UserProfile} from '../Models/UserProfile';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {

  entityPath : string =" https://localhost:7000/entity/api/profil/"

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService
    ) {
  }

    getUserProfile(entityId: string):Observable<UserProfile>{
    return this.http.get<ApiResponse>(`${this.entityPath}${entityId}`,{withCredentials:true}).
    pipe(
      map((response: ApiResponse) => {
        if(!response.isSuccess) {
          if(response.statusCode!=404)
            this.snackBar.error(`Something was wrong ! \nError code : ${response.statusCode}\n ErrorMessage: ${response?.message} `);
        }
          console.log(response.data);
        return response.data;
      }));
  }

}


