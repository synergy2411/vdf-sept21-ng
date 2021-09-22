import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  password : FormControl = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    this.exclamationMarkValidator
  ]);
  registerForm : FormGroup;

  exclamationMarkValidator(control : AbstractControl){
    const hasExclamation = control.value.indexOf("!") >= 0;
    return hasExclamation ? null : {exclamation : true}
  }

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password
    })
  }
  onReset(){
    this.registerForm.reset();
  }

  onRegister(){
    console.log(this.registerForm);
  }

  ngOnInit(): void {
  }

}
