TypeScript ---> TSC ----> JavaSCript

# To install Typescript -
- npm intall typescript -g
- tsc --version
- tsc app.ts (generate JS file)
- node app.js

# Angular Building Blocks -
- Component : to create UI- @Component({})
- Directive : markup with some special meaning - @Directive({})
- Pipe : Data formatting - @Pipe({})
- Service : business logic - @Injectable({})
- Module : encapsulation; interrelated code - @NgModule({})

# To install Angular CLI -
- npm install @angular/cli@10 -g
- ng --version

- ng new <project-name> | ng new users-app
- cd users-app
- ng serve

- npm install bootstrap@4

# Angular CLI Commands
- ng generate component path/to/component
- ng g c path/to/component
- ng g d path/to/directive
- ng g s path/to/service
- ng g p path/to/pipe
- ng g m path/to/module


- Component Content Projection
- Component Life cycle methods / hooks
- Directives : Structural | Attributes | Custom Directives 
    - HostBinding
    - HostListener
- Pipes : builtin | Customs 
    - Pure
    - Impure 
- Forms 
    - Template driven form

# Day 03
- Model driven/ Reactive form
- Services
- Observables
- XHR Calls


# Services
- Services are singleton in the scope they are registered with.
    : AppModule - Root Module - providers - App level singleton access - including all components and all services.
    : Components - providers - creating new scope for service - self and child components will receive the singleton instance, but not the other services.

> ng g s services/data


- import HttpClientModule
- HttpClient Class
- GET/POST/PATCH/DELETE



# RxJS operators
- take
- takeWhile
- takeUntil
- filter
- map
- tap
- debounceTime
- throttleTime
- MergeMap
- switchMap
- cancatMap
- forkJoin


# Firebase Cloud integration with Angular
- Login with gmail credentials on console.firebase.google.com
- Create new Project
- Create RealTime Database
- Open Database in test mode
- Import JSON from local machine


- JWT token Authentication
- Interceptors
- Routing
- Modules
- PWA : ng add @angular/pwa
- Redux - basics


# Reactive Forms
- FormControl : represent the individual form element
- FormGroup : represent the complete form | "ngForm"
- FormBuilder : builds the form by grouping individual FormControl elements

# Firebase Authentication
- Enable the Authentication on Firebase
- Integrate Angular App with Firebase Cloud
    > npm install firebase (Connect, Register, Login etc)
- Register / Login Yourself on Firebase
- Firebase assigns token on success Login
- Make GET call with JWT Token

# Routing Terminologies
- Routes : configure the components with routes
- RouterModule : configure the routes for App
- RouterLink : configure the links for URL
- RouterOutlet : provide the space to load the component template
- Router Service : programmatically navigate the user
- CanActivate Gaurd - routes protection
- ActivatedRoute Service : access of route / URL







- PWA
- NGRX
- Testing
- Deployment
- Secure App
- App Optimization
- FAQ