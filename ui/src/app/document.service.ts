import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

docUrl = "http://localhost:3001/document/list"
constructor(private http: HttpClient) { }

getDocList() {  
  return this.http.get(this.docUrl);
}

}
