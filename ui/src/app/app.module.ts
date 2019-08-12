import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DocumentComponent } from './document/document.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationResultsComponent } from './user-registration-results/user-registration-results.component';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      DocumentComponent,
      UserRegistrationComponent,
      UserRegistrationResultsComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
