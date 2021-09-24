import { Component } from "@angular/core";

@Component({
  selector : "app-user",
  template : `
  <p>Username is {{username}}</p>
  `
})
export class UserComponent{

  username = "Foo";

}
