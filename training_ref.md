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