import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit {

  users = [{
    fname: "Nitsel",
    lname: "Ravi",
    email: "nitsel@gmail.com",
    ssoid: "12345"
  }, {
    fname: "Vicky",
    lname: "Kannu",
    email: "vicky@gmail.com",
    ssoid: "12346"
  }]
  constructor() { 

  }

  ngOnInit() {
  }

}
