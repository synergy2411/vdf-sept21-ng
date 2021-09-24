import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EmployeeModule } from './modules/employee/employee.module';

// import { VdfLibModule } from 'vdf-lib'

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
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { rootReducer } from './store/reducers/root.reducer';

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
    CounterComponent,
    ObservableDemoComponent,
    TodosComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    LoadingComponent
  ],
  imports: [               // imports the Modules - Built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule,
    StoreModule.forRoot({ctr : rootReducer}),
    StoreDevtoolsModule.instrument({logOnly : true}),
    // VdfLibModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : LoggerInterceptorService,
    multi : true
  }],          // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
