import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserRegistrationResultsComponent } from './user-registration-results/user-registration-results.component';
import { DocumentComponent } from './document/document.component'
const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full'},
  { path: 'users', component: UserComponent },
  { path: 'userstatus/:username/:regstatus', component: UserRegistrationResultsComponent, pathMatch: 'full' },
  { path: 'newuser', component: UserRegistrationComponent },
  { path: 'managedocs', component: DocumentComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
