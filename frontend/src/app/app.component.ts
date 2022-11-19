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
  
  // constructor(private loginC:LoginComponent)
  // {

  // }
  // loginStatus: Observable<boolean>
  // username: Observable<string>
  
  ngOninit()
  {
    //this.loginStatus=this.loginC.isLoggedIn();
   // this.username=this.loginC.currentusername();
  }
  // ngOnInit()
  // {
  //   $(".showtoast").click(function()
  //   {
  //     $('.toast').toast('show')
  //   })
  // }
  title = 'myApp';
}
