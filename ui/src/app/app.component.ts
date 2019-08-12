import { Component } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'File Manager';
  showNavLinks:boolean = false;

  constructor(route: ActivatedRoute) {
      const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
      this.showNavLinks = true;
      url.subscribe((urlstring) => {
        console.log(urlstring);
      })
   }

  ngOnInit() {

  }

}
