import { Component } from '@angular/core';
import { Observable, Subscription, from, interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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
      // observer.error(new Error("Something bad happened"))
    }, 7000);
    setTimeout(()=>{
      observer.next("Fifth Package")
    }, 9000);
    setTimeout(()=>{
      observer.complete();
    }, 10000)
  })

  source$ = from([1,2,3,4,5,6])

  source1$ = interval(1000)


  unSub$: Subscription;

  onSubscribe(){

    this.source$.subscribe(console.log)
    this.unSub$ = this.source1$.subscribe(console.log)

    // this.unSub$ = this.obs$
    //   .pipe(map(value => {
    //     return "My " + value;
    //   })).pipe(tap(val => {
    //     console.log("[TAP] " , val)
    //   }))
    //   .subscribe(
    //   {
    //     next : (data) => console.log(data),
    //     error : (err) => console.log(err),
    //     complete : () => console.log("COMPLETED")
    //   }
    // )
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }

}
