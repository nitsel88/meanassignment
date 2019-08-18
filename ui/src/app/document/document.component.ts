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
  files:any
  upCnt:boolean
  filedesc:string

  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/document/uploadfile'});

  constructor(private docService: DocumentService) { 
    //on init
    this.files = this.docService.getDocList()

    //on upload
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status);
      this.upCnt = true
      this.files = this.docService.getDocList()
    }

    //to add file description to request
    this.uploader.onBuildItemForm = (item:any, form) => {
      console.log(this.filedesc)
      form.append("filedesc", this.filedesc)
    }

     //to prevent multiple file uploads
    this.uploader.onAfterAddingFile  = (f) => {
      if (this.uploader.queue.length > 1) { this.uploader.queue.splice(0, 1); } 
    }
  }

  download(filename) {
    console.log(filename)
  }

  delete(filename) {
    this.docService.deleteDoc(filename).then(()=>{
      this.files = this.docService.getDocList()
    })
  }

  ngOnInit() {
    
  }

}
