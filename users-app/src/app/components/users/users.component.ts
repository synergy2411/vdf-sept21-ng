import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector : 'app-users',
  templateUrl : `./users.component.html`,
  styleUrls :  [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  users : IUser[];
  showCmp : Boolean = true;

  constructor(private dataService : DataService){ }

  ngOnInit(){
    // this.user = USER_DATA;
    // this.users = this.dataService.getUserData()
    this.dataService.getHttpUserData()
      .subscribe(response => {
        this.users = <IUser[]>response['userdata']
      });
  }

  onMoreInfo(user : IUser){
    alert(`Hello from ${user.lastName}, I am working with ${user.company}!`)
  }

  onChange(evt :any){
    // if(evt.target.value < 100){
    //   return alert("Should be greater than 100");
    // }else{
    //   this.user.votes = evt.target.value;
    // }

  }

}
