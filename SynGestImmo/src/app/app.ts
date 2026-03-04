import { Component, signal } from '@angular/core';
import {NavigationEnd, NavigationStart, ResolveEnd, ResolveStart, Router, RouterOutlet} from '@angular/router';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('SynGestImmo');
  isLoading = false;

  constructor(
    private router: Router,
  ){

    this.router.events.pipe(
      filter(event=>
      event instanceof NavigationEnd ||
      event instanceof NavigationStart ||
      event instanceof ResolveStart ||
      event instanceof  ResolveEnd
      )
    ).subscribe(event=>{
      if(event instanceof NavigationStart || event instanceof ResolveStart){
        this.isLoading = true;
      }
      if(event instanceof NavigationEnd || event instanceof ResolveEnd){
        this.isLoading = false;
      }

    });

  }




}


