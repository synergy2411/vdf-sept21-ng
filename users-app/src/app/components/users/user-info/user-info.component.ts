import { AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, Component, DoCheck, Input,
  OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent
implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{


  @Input() user : IUser;

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChanges", changes)
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
