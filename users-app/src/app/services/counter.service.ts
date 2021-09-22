import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class CounterService{
  private counter : number = 0;
  getCounter(){
    return this.counter;
  }
  increaseCounter(){
    this.counter++;
  }
}
