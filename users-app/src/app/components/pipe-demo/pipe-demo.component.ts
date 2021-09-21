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

  todoCollection = [
    {label : "grocery", status : "completed"},
    {label : "shopping", status : "pending"},
    {label : "insurance", status : "completed"},
    {label : "planting", status : "pending"},
  ]

  filteredStatus : string = "";

  onAddNewItem(){
    // impure change
    this.todoCollection.push({label : "New Label", status : "pending"});
    // pure change
    // this.todoCollection = [
    //   {label : "grocery", status : "completed"},
    // {label : "shopping", status : "pending"},
    // {label : "insurance", status : "completed"},
    // {label : "planting", status : "pending"},
    // {label : "New Label", status : "pending"}
    // ]
  }

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
