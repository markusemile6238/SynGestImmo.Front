import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../../auth/services/AuthService/auth.service';
import {environment} from '../../../../../environments/environment';
import {JwtService} from '../../../auth/services/jwtService/jwt.service';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';


@Component({
  selector: 'app-topbar',
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  encapsulation: ViewEncapsulation.None
})
export class Topbar {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  isDarkMode = false;
  appName!  :string ;


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
    this.appName = environment.appName;
  }
}
