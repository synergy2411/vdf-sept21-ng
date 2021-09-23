import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : string | null = null;

  constructor(private router : Router) { }

  register(email : string, password : string){
    firebase.createUserWithEmailAndPassword( firebase.getAuth(),email, password)
      .then(response => {
        console.log("User registered successfully!", response)
      })
      .catch(err => console.log(err))
  }

  login(email : string, password : string){
    firebase.signInWithEmailAndPassword(firebase.getAuth(), email ,password)
      .then(response => {
        console.log("Login successfully")
        firebase.getIdToken(response.user)
          .then(token => {
            // console.log(token);
            this.token = token;
            this.router.navigate(['users'])
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  getToken () {
    return this.token;
  }

  isAuthenticated(){
    return this.token !== null;
  }

}


// Value Checking
// let x = "100";
// let y = 100;
// console.log(x == y);
// // Value + Type Checking
// console.log(x === y);
