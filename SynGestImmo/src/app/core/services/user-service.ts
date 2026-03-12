import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddUserBody, GetAllResponse, GetUserResponse, UserModel, UserResponse} from '../models/user.model';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class UserService {

  private basePath: string = "https://localhost:7000/identity/api/admin/user/"
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

  getUserById(id:string|null): Observable<UserModel>{
    return this.http.get<GetUserResponse>(`${this.basePath}detail/${id}`, {withCredentials: true})
      .pipe(
        map((res: GetUserResponse) => {
          if (!res.isSuccess && !res.data)
            throw new Error('Failed to get all user');
          return res.data;
        })
      );
  }

  createNewUser(user: AddUserBody): Observable<UserResponse>{
    return this.http.post<UserResponse>(`${this.basePath}`, user, {withCredentials: true}).
      pipe(
        map((res: UserResponse)=>{
          if(res.statusCode){
            return res;
          }else{
            throw new Error('Failed to create new user');
          }
        })
    )
  }

}
