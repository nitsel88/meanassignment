import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-registration-results',
  templateUrl: './user-registration-results.component.html',
  styleUrls: ['./user-registration-results.component.css']
})
export class UserRegistrationResultsComponent implements OnInit {

  username;
  regstatus;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params['username'];
      this.regstatus = params['regstatus'];
      });
  }

}
