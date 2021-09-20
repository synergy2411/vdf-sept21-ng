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
    image : "./assets/images/bill.jpg"
  }
}
