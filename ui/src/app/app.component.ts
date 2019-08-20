import { Component } from '@angular/core';

import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File Manager'
  showNavLinks:boolean = false;


  constructor(router:Router) { 
     router.events.subscribe(event=> {
      if (event instanceof RoutesRecognized) {
        if (event.url.includes('userstatus')) {
        this.showNavLinks = true;
        }
      }
     })
   }

  ngOnInit() {

  }

}
