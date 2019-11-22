import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    // username: new FormControl('',[
    //   Validators.required,
    //   Validators.minLength(3),
    //   UsernameValidators.cannotContainSpace,
    //   UsernameValidators.shouldBeUnique // the customer validator is not working in array[] validations
    // ]), 
    username: new FormControl('', Validators.required, 
    UsernameValidators.shouldBeUnique), 
    password: new FormControl('',Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  login(){
    //let isValid = authService.login(this.form.value);
    //if(!isValid){
      this.form.setErrors({
        invalidLogin:true
      });
    //}
  }

}
