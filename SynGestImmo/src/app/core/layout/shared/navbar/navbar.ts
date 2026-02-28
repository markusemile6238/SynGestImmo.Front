import {Component, EventEmitter, Input, input, Output, SimpleChanges} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from '../../../auth/services/AuthService/auth.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,


  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  role?: string;

  @Input() isClosed!: boolean;
  @Output() toggleMenuChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private auth :AuthService
  ){

  }

  ngOnInit():void
  {
     const  ctx = this.auth.getUserContext();
    this.role = ctx?.role;
    console.log(this.isClosed);
  }



  toggleButton():void{
    this.toggleMenuChange.emit(!this.isClosed);
  }

}
