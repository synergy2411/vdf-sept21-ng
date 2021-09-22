import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  // providers :   [CounterService]
})
export class CounterComponent implements OnInit {

  constructor(private ctrService : CounterService) { }

  getCounter(){
    return this.ctrService.getCounter();
  }

  increase(){
    this.ctrService.increaseCounter();
  }

  ngOnInit(): void {
  }

}
