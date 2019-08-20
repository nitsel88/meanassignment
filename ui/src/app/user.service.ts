import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

registerUser(user) {
  return this.http.post("http://localhost:3001/users/register", user)
}

getUsers() {
  return this.http.get("http://localhost:3001/users/")
}

}
