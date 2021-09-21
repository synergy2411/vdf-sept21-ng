import { Component, OnInit } from '@angular/core';
import { USER_DATA } from 'src/app/model/mocks';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  user : IUser;
  contactNumber = 987654321;

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes...")
    }, 3000)
  })

  constructor() { }

  ngOnInit(): void {
    this.user = USER_DATA
  }

}
