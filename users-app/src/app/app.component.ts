import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ctrService : CounterService){}

  getCounter(){
    return this.ctrService.getCounter()
  }

  increase(){
    this.ctrService.increaseCounter()
  }

}
