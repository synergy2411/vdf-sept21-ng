import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls :  [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  user : IUser;
  showCmp : Boolean = true;

  constructor(){ }

  ngOnInit(){
    this.user = USER_DATA;
  }

  onMoreInfo(user : IUser){
    alert(`Hello from ${user.lastName}, I am working with ${user.company}!`)
  }

  onChange(evt :any){
    if(evt.target.value < 100){
      return alert("Should be greater than 100");
    }else{
      this.user.votes = evt.target.value;
    }

  }

}
