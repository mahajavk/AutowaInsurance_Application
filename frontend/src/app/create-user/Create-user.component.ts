import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api-service';
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
// import Validation from './utils/validation';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: './Create-user.component.html',
  styleUrls: ['./Create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userform: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
     private toaster: ToastrService,
     private apiService: ApiService,
     private router: Router,
    private ngZone: NgZone,
     ) {

  }

  ngOnInit(): void {
    this.userform = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userform.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.userform.valid) {
      return false;
    } else {
      return this.apiService.createUser(this.userform.value).subscribe({
        complete: () => {
          console.log('User successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('user-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

  onReset(): void {
    this.submitted = false;
    this.userform.reset();
  }
}
