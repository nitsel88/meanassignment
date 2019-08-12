import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  files = [{
    no: 1 ,
    name: "sample_pdf.pdf",
    type: "application/pdf",
    desc: "my pdf file"
  }, {
    no: 2 ,
    name: "myfile.txt",
    type: "application/txt",
    desc: "my text file"
  }]
  constructor() { }

  ngOnInit() {
  }

}
