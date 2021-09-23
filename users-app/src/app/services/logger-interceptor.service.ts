import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(value => {
      console.log("[LOGGER INTERCEPTOR WORKS]")
      console.log(value);
    },
    err => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          // Error Handler
          console.log("Unauthorized User")
        }
      }
    }))
  }
}
