// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-list-user',
//   templateUrl: './list-user.component.html',
//   styleUrls: ['./list-user.component.css']
// })
// export class ListUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api-service';
import {  FormGroup,  FormBuilder,  FormArray,  FormControl,  Validators} from '@angular/forms';

@Component({
  selector: 'user-list',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  User:any = [];
  constructor(private apiService: ApiService) { 
    this.readUser();
  }
  ngOnInit() {}
  readUser(){
    this.apiService.getUsers().subscribe((data) => {
     this.User = data;
    })    
  }
  removeUser(user, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deletUser(user._id).subscribe((data) => {
          this.User.splice(index, 1);
        }
      )    
    }
  }
}