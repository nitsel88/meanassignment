import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: string;
  status = "success"
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  registerme() {
    this.router.navigate(['userstatus', this.user, this.status]);
    console.log(this.user);
  }
}
