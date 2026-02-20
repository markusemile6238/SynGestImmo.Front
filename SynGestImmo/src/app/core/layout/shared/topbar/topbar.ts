import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../../auth/services/AuthService/auth.service';
import {environment} from '../../../../../environments/environment';
import {JwtService} from '../../../auth/services/jwtService/jwt.service';


@Component({
  selector: 'app-topbar',
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  encapsulation: ViewEncapsulation.None
})
export class Topbar {

  constructor(
    private authService: AuthService,
  ) {
  }

  isDarkMode = false;
  appName:string = environment.appName;
  context;

  isAuth() :boolean{
    return this.authService.isAuthenticated();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }
}
