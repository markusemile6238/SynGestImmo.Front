import { Injectable } from '@angular/core';

export interface JwtPayload{
  sub: string;
  email: string;
  username: string;
  userRef: string;
  role:string;
  mustchangePassword: string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role":string;
}

@Injectable({
  providedIn: 'root',
})
export class JwtService {

  decode(token: string) : JwtPayload{
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  }

}
