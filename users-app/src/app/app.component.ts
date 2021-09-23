import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private ctrService: CounterService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArYm4BUDR7DjDgjLt9JK_Naq5gQDVOPlU',
      authDomain: 'vdf-users-app.firebaseapp.com',
    });
  }

  getCounter() {
    return this.ctrService.getCounter();
  }

  increase() {
    this.ctrService.increaseCounter();
  }
}
