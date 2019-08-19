import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
      resolve("deleted")
    });
  })
 }

/*getFile(docname: string) {
 const url = "http://localhost:3001/document/downloadfile/" + docname
 return this.http.get(url, { headers: new HttpHeaders({
   'Authorization': '{data}',
   'Content-Type': 'application/json',
 }), responseType: 'blob'}).pipe( tap(
     // Log the result or error
     data => console.log('You received data'),
     error => console.log(error)
  ));
}*/

getFile(docName: string) {
  const getUrl = "http://localhost:3001/document/download/"+docName
  return this.http.get(getUrl, {responseType: 'arraybuffer'})
}

}
