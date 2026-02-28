import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserId} from '../user-id/user-id';
import {UserModel} from '../../../../../core/models/user.model';


@Component({
  selector: 'app-detail',
  imports: [
    UserId
  ],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {
  user! : UserModel ;


  constructor(
    private route : ActivatedRoute,
  ){  }

  ngOnInit() : void {
    this.user = this.route.snapshot.data['user'];

  }


}
