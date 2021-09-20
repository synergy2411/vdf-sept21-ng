import { Component } from '@angular/core';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls :  [`./users.component.css`]
})
export class UsersComponent{
  user = {
    firstName : "bill",
    lastName : "gates",
    dob : new Date("Dec 21, 1965"),
    income : 50000,
    company : "Microsoft",
    image : "./assets/images/bill.jpg",
    votes : 120
  }

  onMoreInfo(user : any){
    alert(`Hello from ${user.lastName}, I am working with ${user.company}!`)
  }

  onChange(evt){
    if(evt.target.value < 100){
      return alert("Should be greater than 100");
    }else{
      this.user.votes = evt.target.value;
    }

  }

}
