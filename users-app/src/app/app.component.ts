import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showLoader : boolean = false;

  constructor(
      private ctrService: CounterService,
      private authService : AuthService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArYm4BUDR7DjDgjLt9JK_Naq5gQDVOPlU',
      authDomain: 'vdf-users-app.firebaseapp.com',
    });

    setInterval(() => {
      this.showLoader = false;
    }, 5000)

  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  getCounter() {
    return this.ctrService.getCounter();
  }

  increase() {
    this.ctrService.increaseCounter();
  }
}
