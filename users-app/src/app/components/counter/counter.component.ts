import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  // providers :   [CounterService]
})
export class CounterComponent implements OnInit {

  counter : number;
  constructor(private store : Store<any>){}

  ngOnInit(): void {
    this.store.subscribe(response => {
      this.counter = response['ctr'].counter
    })
  }
  onIncrease(){
    this.store.dispatch({type : "INCREMENT"})
  }

  // constructor(private ctrService : CounterService) { }

  // getCounter(){
  //   return this.ctrService.getCounter();
  // }

  // increase(){
  //   this.ctrService.increaseCounter();
  // }



}
