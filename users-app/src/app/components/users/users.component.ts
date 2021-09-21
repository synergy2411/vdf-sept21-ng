import { Component } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls :  [`./users.component.css`]
})
export class UsersComponent{
  user : IUser = {
    firstName : "bill",
    lastName : "gates",
    dob : new Date("Dec 21, 1965"),
    income : 50000,
    company : "Microsoft",
    image : "./assets/images/bill.jpg",
    votes : 120
  }

  showCmp : Boolean = true;

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
