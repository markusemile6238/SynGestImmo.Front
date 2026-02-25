import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {Navbar} from '../shared/navbar/navbar';
import {Topbar} from '../shared/topbar/topbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    Navbar,
    Topbar,
    RouterOutlet
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

  isClosed:boolean = true;


  toggleMenu(st : boolean):void{
    this.isClosed = !this.isClosed;
  }


}
