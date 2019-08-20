import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user = {
   fname: "",
   lname: "",
   ssoid: 0,
   email: ""
  }
  status = "success"
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
  }

  registerme() {
      this.userservice.registerUser(this.user).subscribe((data)=> {

        this.router.navigate(['userstatus', this.user.fname, "success"]);

    })
  }
}
