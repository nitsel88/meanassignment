import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DocumentComponent } from './document/document.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationResultsComponent } from './user-registration-results/user-registration-results.component';
import { DocumentService } from './document.service'
import { UserService } from './user.service'
@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      DocumentComponent,
      UserRegistrationComponent,
      UserRegistrationResultsComponent,
      FileSelectDirective,
      FileDropDirective
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [DocumentService, UserService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
