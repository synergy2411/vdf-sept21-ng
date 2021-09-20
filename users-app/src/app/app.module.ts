import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [           // Component, Directive, Pipe
    AppComponent, UsersComponent
  ],
  imports: [               // imports the Modules - Built-in & Custom
    BrowserModule
  ],
  providers: [],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
