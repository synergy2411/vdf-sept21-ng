import { Injectable } from '@angular/core';
import * as firebase from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;
  constructor() { }

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
            console.log(token);
            this.token = token;
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
}
