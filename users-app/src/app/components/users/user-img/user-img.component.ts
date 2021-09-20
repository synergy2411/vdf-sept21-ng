import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{
  @Input() user : any;
  @Output() childEvent = new EventEmitter<any>();

  onClick(){
    this.childEvent.emit(this.user);
  }
}
