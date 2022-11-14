import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './About/About.component';
import { ProcessComponent } from './Process/Process.component';
import { HomeComponent } from './home/home.component';
import { ContactUSComponent } from './ContactUS/ContactUS.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserComponent } from './create-user/Create-user.component'
import { LoginComponent } from './login/login.component';
import { UserslistComponent } from './userslist/userslist.component';
import { ListUserComponent } from './list-user/list-user.component'
import { ApiService } from './service/api-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProcessComponent,
    ContactUSComponent,
    HomeComponent,
    CreateUserComponent,
    LoginComponent,
    UserslistComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
