import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

docUrl = "http://localhost:3001/document/list"
constructor(private http: HttpClient) { }



getDocList() {  
  return this.http.get(this.docUrl);
}

deleteDoc(docname) { 
  return new Promise((resolve, reject)=> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {filename: docname},
    };
      this.http.delete('http://localhost:3001/document/deletefile', options).subscribe((s) => {
      console.log('response from server:' + s.response);
      resolve("deleted")
    });
  })
 }
}
