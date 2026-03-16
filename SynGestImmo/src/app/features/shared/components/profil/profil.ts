import {Component, Input} from '@angular/core';
import {UserProfil} from '../../Models/UserProfil';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {

  UserProfil!: UserProfil;

  @Input() userEntityId!: string;

  ngOnInit() : void {


  }

  GetProfilOfUser(entityId: string){

  }

}
