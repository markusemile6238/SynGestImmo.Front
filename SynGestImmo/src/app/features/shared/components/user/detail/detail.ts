import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserId} from '../user-id/user-id';
import {UserModel} from '../../../../../core/models/user.model';
import {UserService} from '../../../../../core/services/user-service';
import {SnackBarService} from '../../../../../core/services/snack-bar-service';
import {Profile} from '../../profile/profile';
import {Documents} from '../../documents/documents';


@Component({
  selector: 'app-detail',
  imports: [
    UserId,
    Profile,
    Documents
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {
  user! : UserModel ;


  constructor(
    private userService : UserService,
    private route : ActivatedRoute,
    private snackbar : SnackBarService
  ){  }

  ngOnInit() : void {
    this.user = this.route.snapshot.data['user'];
  }

  updateUser(user : UserModel){

  }


}
