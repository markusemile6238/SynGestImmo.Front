import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/auth.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private readonly apiUrl = 'https://localhost:7123/api';

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ){}

  login(request: LoginRequest)
  {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, request)
      .pipe(
        tap(res=>{
          this.tokenService.setAccessToken(res.accessToken);
        })
      );      
  }
  
  logout():void {
    this.tokenService.clear();
  }
}
