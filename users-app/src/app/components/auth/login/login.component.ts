import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  onLogin(f : NgForm){
    console.log(f);
    this.authService.login(
      f.value.username,
      f.value.password
    )
  }
  onReset(f : NgForm){
    f.reset();
  }

}
