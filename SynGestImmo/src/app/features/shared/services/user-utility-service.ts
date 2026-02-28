import { Injectable } from '@angular/core';
import {init} from 'vitest/worker';

@Injectable({
  providedIn: 'root',
})
export class UserUtilityService {

  getInitial(username: string){
    const initTab = username.split(' ');
    if(initTab.length > 2){
      return (initTab[0][0]+initTab[1][0]).toUpperCase();
    }else{
      return username.substr(0, 2).toUpperCase();
    }
  }

}
