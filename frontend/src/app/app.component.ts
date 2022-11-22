import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Quote } from './model/quotes';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginUser:Quote;
  

  
  ngOninit()
  {

  }

  title = 'myApp';
}
