import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [           // Component, Directive, Pipe
    AppComponent, UsersComponent,
    UserInfoComponent, UserImgComponent,
    DirectiveDemoComponent, HighlightDirective, PipeDemoComponent,
    CountryCodePipe,
    FilterPipe
  ],
  imports: [               // imports the Modules - Built-in & Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
