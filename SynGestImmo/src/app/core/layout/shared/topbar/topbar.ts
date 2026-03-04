import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../../auth/services/AuthService/auth.service';
import {Router} from '@angular/router';
import {UserUtilityService} from '../../../../features/shared/services/user-utility-service';
import {NgStyle} from '@angular/common';
import {MatIconButton} from '@angular/material/button';


@Component({
  selector: 'app-topbar',
  imports: [
    NgStyle,
    MatIconButton

  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  encapsulation: ViewEncapsulation.None
})
export class Topbar {

  initialUser :string ='';

  @Input() isMobile!:boolean;
  @Input() isCollapsed!:boolean;
  @Input() appName!:string;

  constructor(
    private authService: AuthService,
    private userTools :UserUtilityService,
    private router: Router
  ) {
  }

  isDarkMode = false;
  protected ngClass: any;


  isAuth() :boolean{
    return this.authService.isAuthenticated();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }

  logout() :void{
    this.authService.logout();
    this.router.navigate(['login']);
}

  ngOnInit():void{
    const user = this.authService.getUserContext()
    this.initialUser= this.userTools.getInitial(user!.username);
  }
}
