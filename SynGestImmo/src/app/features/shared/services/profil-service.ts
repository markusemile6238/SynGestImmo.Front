import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfilService {

  entityPath : string =" https://localhost:700/entity/api/profil/"

  constructor(private http: HttpClient) {
  }

  getUserProfile(entityId: string):Observable<any>{
    return this.http.get(`${this.entityPath}/${entityId}`,{withCredentials:true}).
    pipe(

    )
  }

}


