import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(email : string, password : string){
    firebase.createUserWithEmailAndPassword(firebase.getAuth() ,email, password)
      .then(response => {
        console.log("User registered successfully!")
      })
      .catch(err => console.log(err))
  }
  login(){}
}
