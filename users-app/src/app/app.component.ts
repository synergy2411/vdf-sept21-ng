import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';
import * as firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

// impure change array.push() | user.name = "foo"
// pure change array = [] | user = { name : "Foo"}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  showLoader : boolean = false;

  jsSnippets = "<script>javascript:alert('Who's this?')</script>"
  dangerUrl = "javascript:alert('from External Script')"
  safeUrl ;
  constructor(
      private ctrService: CounterService,
      private authService : AuthService,
      private sanitize : DomSanitizer) {
        this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.dangerUrl)
      }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyArYm4BUDR7DjDgjLt9JK_Naq5gQDVOPlU',
      authDomain: 'vdf-users-app.firebaseapp.com',
    });
    // debugger;
    setInterval(() => {
      this.showLoader = false;
    }, 5000)

  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  getCounter() {
    return this.ctrService.getCounter();
  }

  increase() {
    this.ctrService.increaseCounter();
  }
}
