import {Component, signal} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Navbar} from '../shared/navbar/navbar';
import {Topbar} from '../shared/topbar/topbar';
import {RouterOutlet} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-main-layout',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    Navbar,
    Topbar,
    RouterOutlet,


  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

  appName: string = environment.appName;

  isCollapsed = signal(false);
  isMobile = signal(false);

  constructor(
    private breakpointObserver : BreakpointObserver,
      ){}

  ngOnInit(){

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result=>{
      if(result.matches){
        this.isMobile.update(v=>true);
        this.isCollapsed.update(v=>true);
      }
      else
        this.isMobile.update(v=>false);
    })
  }

  collapseMenu():void{
     this.isCollapsed.update(v=>!v);
  }
  closeMenu():void{
    if(this.isMobile())
      this.isCollapsed.update(v=>true);
  }


}
