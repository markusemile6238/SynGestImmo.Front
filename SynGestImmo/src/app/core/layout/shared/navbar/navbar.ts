import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from '../../../auth/services/AuthService/auth.service';
import {adminMenuData, menuData} from './menu-datas';
import {BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink

  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  role?: string;

  menu?:menuData[];

  @Input() isClosed!: boolean;
  @Input() isMobileOpen!: boolean;
  @Input() isMobile!: boolean;
  @Input() appName!: string;
  @Output() toggleMenuChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleIsClosed : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private auth :AuthService,

    private breakpointObserver : BreakpointObserver
  ){

  }

  ngOnInit():void
  {
    const  ctx = this.auth.getUserContext();
    this.role = ctx?.role;
    if(this.isMobile)
      this.isClosed = true;
    this.getMenuOptions();
  }


  getMenuOptions(){
    switch(this.role){
      case "SU":
        this.menu=adminMenuData;
        break;
    }
  }

  collapseMenuButton():void{
        this.toggleMenuChange.emit(!this.isClosed);
  }

  closeIfMobile(){
    if(this.isMobile)
      this.toggleIsClosed.emit(true);

  }
}
