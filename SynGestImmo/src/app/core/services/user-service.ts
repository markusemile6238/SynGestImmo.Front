import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetAllResponse, UserModel} from '../models/user.model';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class UserService {

  private basePath: string = "https://localhost:7123/api/auth/admin/user/"
  private userList: UserModel[] = [];

  constructor(
    private http: HttpClient
  ) {
  }


  getAlluser(): Observable<UserModel[]> {
    return this.http.get<GetAllResponse>(`${this.basePath}all`, {withCredentials: true})
      .pipe(
        map((res: GetAllResponse) => {
        if (!res.isSuccess && !res.data)
            throw new Error('Failed to get all user');
        return res.data;
        })
    );
  }
}
