import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ ContactUSComponent } from './ContactUS/ContactUS.component'
import {AboutComponent} from './About/About.component'
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from './home/home.component'
import { ProcessComponent } from './Process/Process.component';
import { ListUserComponent } from './list-user/list-user.component'
const routes: Routes = [
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:ProcessComponent,
    path:"process"
  },
{
  component:ContactUSComponent,
  path:"contact"
},
{
  component:ListUserComponent,
  path:"user-list"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
