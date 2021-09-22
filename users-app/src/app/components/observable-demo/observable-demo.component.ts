import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  obs$ = new Observable( observer => {
    setTimeout(()=>{
      observer.next("first Package")
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package")
    }, 2000);
    setTimeout(()=>{
      observer.next("Third Package")
    }, 4000);
    setTimeout(()=>{
      observer.next("Fourth Package")
    }, 7000);
    setTimeout(()=>{
      observer.next("Fifth Package")
    }, 9000);
    setTimeout(()=>{
      observer.complete();
    }, 10000)
  })

  unSub$: Subscription;

  onSubscribe(){
    this.unSub$ = this.obs$.subscribe(
      (data) => {console.log(data)},
      (err) => {console.log(err)},
      () => {console.log("COMPLETED")}
    )
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

}
