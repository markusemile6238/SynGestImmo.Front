import { Injectable } from '@angular/core';
import { TokenService } from '../tokenService/token.service';
import { HttpClient } from '@angular/common/http';
import {ApiResponse, LoginRequest, LoginResponse} from '../../../models/auth.model';
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

    return {
      userId: payload.sub,
      role:payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
      mustChangePassword: payload.mustchangePassword ==='true'
    }

  }

  isAuthenticated() :boolean{
    return !!this.tokenService.getAccessToken();
  }

  hasRole(role: string) :boolean{
    const ctx = this.getUserContext();
    return ctx?.role === role;
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

}
