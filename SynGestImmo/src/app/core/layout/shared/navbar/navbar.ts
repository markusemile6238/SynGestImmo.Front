import { Component } from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink

  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
