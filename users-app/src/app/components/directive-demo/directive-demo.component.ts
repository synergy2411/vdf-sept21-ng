import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  dynamicClass = {'my-border' : false, 'my-feature' : true }

  dynamicStyle = {
    border : "2px blue solid",
    fontSize : "1.3em"
  }

  tab = 1;

  todoCollection = [
    { label : 'to buy the jeans', status : true},
    { label : 'to buy the pulses', status : false},
    { label : 'to pot the plants', status : true},
    { label : 'to renew car insurance', status : false},
  ]

  onToggle(){
    this.dynamicClass['my-border'] = !this.dynamicClass['my-border']
    this.dynamicClass['my-feature'] = !this.dynamicClass['my-feature']
  }

  ngOnInit(): void {
  }

}
