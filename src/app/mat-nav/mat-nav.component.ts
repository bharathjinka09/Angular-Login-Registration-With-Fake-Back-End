import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-nav',
  templateUrl: './mat-nav.component.html',
  styleUrls: ['./mat-nav.component.css']
})
export class MatNavComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  stringDate: string;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
        
    setInterval(() => {

      let currentDate = new Date();

      this.stringDate = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();

    }, 1000);

  }
  title = "EshtechZ";
  ngOnInit() {
  }

  isUserLoggedIn(){
    return !this.router.url.includes('/login');
  }

}