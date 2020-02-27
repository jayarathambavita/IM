import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { MustMatch } from '../_helpers/must-match.validation';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 registerForm: FormGroup;
submitted = false;

 hide = true;
  form: any = {};
  
  isSignedUp = false;
  isSignUpFailed = true;
  errorMessage = '';
  successMessage: string;
  loading = false;

 
  constructor( public authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    
}

  ngOnInit() {
     this.registerForm = this.formBuilder.group({
            id:[''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            COMName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

  async  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
      
        this.authService.doRegister(this.registerForm.value)

    }
  
  


 
}
