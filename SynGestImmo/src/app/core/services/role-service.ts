import { Injectable } from '@angular/core';
import {GetAllResponse, RoleModel} from '../models/role.model';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {SnackBarService} from './snack-bar-service';

@Injectable({
  providedIn: 'root',
})
export class RoleService {

  private basePath: string = "https://localhost:7000/identity/api/auth/admin/role"
  private userRole: RoleModel[] = [];

  constructor(
    private http: HttpClient,
    private snackBar: SnackBarService
  ) {
  }

  getAllRole(): Observable<RoleModel[]> {
    return this.http.get<GetAllResponse>(`${this.basePath}`, {withCredentials: true})
      .pipe(
        map((res: GetAllResponse) => {
          if (!res.isSuccess && !res.data)
            //throw new Error('Failed to get all roles');
            this.snackBar.error("Failed to get all roles")
          return res.data;
        })
      );
  }
}
