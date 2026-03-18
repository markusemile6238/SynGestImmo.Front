import {Component, Input} from '@angular/core';
import {UserProfil} from '../../Models/UserProfil';
import {ProfilService} from '../../services/profil-service';
import {Subscriber, Subscription} from 'rxjs';
import {ApiResponse} from '../../../../core/models/auth.model';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  UserProfile!: UserProfile;

  constructor(private profileService: ProfilService) {
  }

  @Input() userEntityId!: string;

  ngOnInit() : void {


  }

  GetProfileOfUser(entityId: string) :UserProfile {
    this.profileService.getUserProfile(entityId).subscribe({
      next: (response:ApiResponse) => {
        if(response.isSuccess){
          this.UserProfile=response.data;
        }
      },error (error:any) {
        console.log(error.message())
    }
    })
  }

}
