import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { FileUploadDirective } from './directives/fileupload.directive';
import { RegisterComponent } from './components/auth/register/register.component';
import { CounterService } from './services/counter.service';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [           // Component, Directive, Pipe
    AppComponent, UsersComponent,
    UserInfoComponent, UserImgComponent,
    DirectiveDemoComponent, HighlightDirective, PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    LoginComponent,
    FileUploadDirective,
    RegisterComponent,
    CounterComponent
  ],
  imports: [               // imports the Modules - Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CounterService],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
