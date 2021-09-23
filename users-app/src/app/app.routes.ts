import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { ProductComponent } from './components/product/product.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';
import { LoginGaurdService } from './services/login-gaurd.service';

export const APP_ROUTES : Routes = [
  {
    path : "",        // http://localhost:4200
    redirectTo : "login",
    pathMatch : "full"
  },{
    path : "login",   // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "register",     // http://localhost:4200/register
    component : RegisterComponent
  },{
    path : "pipe-demo",      // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : 'directive-demo',       // http://localhost:4200/directive-demo
    component : DirectiveDemoComponent
  },{
    path : "observable-demo",      // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  },{
    path : "todos",              // http://localhost:4200/todos
    component : TodosComponent
  }, {
    path : 'users',            // http://localhost:4200/users
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "product",
    component : ProductComponent,
    children : [
      {path : "overview/:productId/:productName", component : OverviewComponent},
      {path : "specification", component : SpecificationComponent}
    ]
  },{
    path : "lazy",
    loadChildren : () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)
  },{
    path : "**",
    redirectTo : 'login',
    pathMatch : 'full'
  }
]
