import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service'
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  /*files = [{
    no: 1 ,
    name: "sample_pdf.pdf",
    type: "application/pdf",
    desc: "my pdf file"
  }, {
    no: 2 ,
    name: "myfile.txt",
    type: "application/txt",
    desc: "my text file"
  }] */
  files;
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/document/uploadfile'});

  constructor(private docService: DocumentService) { }

  ngOnInit() {
    this.docService.getDocList().subscribe(data => {
       console.log(data)
       this.files = data
    }, error => {

    })
  }

}
