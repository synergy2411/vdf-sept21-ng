import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription, from, interval, of, fromEvent } from 'rxjs';
import { debounce, debounceTime, map, mergeMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit{

  search : FormControl = new FormControl();
  searchForm : FormGroup;

  constructor(private fb : FormBuilder, private http : HttpClient){
    this.searchForm = this.fb.group({
      search : this.search
    })
  }

  repos = [];

  ngOnInit(){
    this.search.valueChanges
    .pipe(debounceTime(2000))
    .pipe(mergeMap(value => {
      return this.http.get(`https://api.github.com/users/${value}/repos`)
    }))
    .subscribe((response) => {
      console.log(response);
      this.repos = <Array<any>> response
    })
  }

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

  source$ = from([1,2,3,4,5,6]) // creates observable from array / promise

  source1$ = interval(1000)     // produces the infinite numbers

  source2$ = of(9,8,7,6,5,4);

  source3$ = fromEvent(document, "click")

  unSub$: Subscription;

  onSubscribe(){

    // this.source$.subscribe(console.log)
    // this.unSub$ = this.source1$
    // .pipe(take(4))
    // .subscribe(console.log)
    // this.source2$.subscribe(console.log)
    this.source3$.subscribe(console.log)
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
