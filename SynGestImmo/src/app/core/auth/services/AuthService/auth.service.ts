import { Injectable } from '@angular/core';
import { TokenService } from '../tokenService/token.service';
import { HttpClient } from '@angular/common/http';
import {ApiResponse, ChangePasswordRequest, LoginRequest, LoginResponse} from '../../../models/auth.model';
import {map, tap} from 'rxjs';
import {JwtService} from '../jwtService/jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly apiUrl = 'https://localhost:7123/api';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private jwt: JwtService
  ){}

  login(request: LoginRequest) {
    return this.http
        .post<ApiResponse<LoginResponse>>(`${this.apiUrl}/auth/login`, request, {withCredentials: true})
      .pipe(
        map(res=>{
          if(!res.isSuccess || !res.data){
            throw new Error(res.error?.message ?? 'Login failed.');
          }
          return res.data;
        }),
      tap(data=>{
        this.tokenService.setAccessToken(data.accessToken);
      })
      );
  }

  logout():void {

    this.http
      .post(`${this.apiUrl}/auth/logout`, {withCredentials: true})
      .subscribe();

    this.tokenService.clear();
  }

  getUserContext(){
    const token = this.tokenService.getAccessToken();
    if(!token) return null;

    const payload = this.jwt.decode(token);

    const userRef = payload.userRef;

    console.log(userRef.split('-')[2]);

    return {
      userId: payload.sub,
      username: payload.username,
      userRef:  userRef,
      role: payload.userRef.split('-')[2],
      mustChangePassword: payload.mustchangePassword ==='true'
    }
    /*role:payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']*/

  }

  isAuthenticated() :boolean{
    return !!this.tokenService.getAccessToken();
  }

  hasRole(role: string) :boolean{
    const ctx = this.getUserContext();

    return ctx?.role=== role;
  }

  mustChangePassword():boolean{
    const ctx = this.getUserContext();
    return ctx?.mustChangePassword ?? false;
  }

  refresh(){
    return this.http.post<{accessToken:string }>(
      'https://localhost:7123/api/auth/refresh',{},{withCredentials:true}
    ).pipe(
      tap(res=>{this.tokenService.setAccessToken(res.accessToken)})
    )
  }

  changePassword(request:ChangePasswordRequest){
    return this.http
      .post<ApiResponse>(`${this.apiUrl}/auth/change-password`,request, {withCredentials:true});
  }

}
