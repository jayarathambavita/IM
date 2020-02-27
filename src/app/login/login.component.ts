import { Component, OnInit } from '@angular/core';
import { MustMatch } from '../_helpers/must-match.validation';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
   hide = true;
    form: any = {};
    isSignedUp = false;
    isSignUpFailed = true;
    errorMessage = '';
    successMessage: string;
    loading = false;

  constructor(private formBuilder: FormBuilder, private AS: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });

   }

   login(){
    if (this.registerForm.invalid) {
      return;
  }
     this.AS.login(this.registerForm.value.email, this.registerForm.value.password).then(res =>{
        console.log('res' +res);
        this.router.navigate(['/home']);
     }).catch(err=>{
       console.log('err sd' + err)
       alert(err)
     })
   }
}
