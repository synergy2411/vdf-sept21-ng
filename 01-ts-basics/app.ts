// let x : string = "Some string";

// x = "100";

// let y : number = 100;

// let z : boolean = true;

// Built-in DataTypes in JavaScript - 
// - Scalar Types : String, Number, Boolean, Date
// - Reference Types : Objects, Functions, Array
// - More Types : any, void, enum, null etc
// - Classes have thier own types

// class Foo{}
// class Bar{}

// class Bam{
//     constructor(foo: Foo, bar: Bar){}
// }

// new Bam(new Foo(), new Bar())

// enum Colors {
//     RED, GREEN, BLUE
// }

// let myColor : Colors = Colors.RED

// let a : any = true;

// a = "String";
// a = 203;


// interface Person {
//     firstName : string;
//     lastName : string;
//     age : number;
// }

// class Student{
//     private firstName : string;
//     private lastName : string;

//     // constructor(firstName : string, lastName : string){
//     constructor(obj : Person){
//         this.firstName = obj.firstName;
//         this.lastName = obj.lastName;
//     }

//     getFullName(): string {
//         return this.firstName + " " + this.lastName;
//     }
// }

// // let foo = new Student("Foo", "Bar");
// let user : Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32
// }

// let foo = new Student(user)
// console.log(foo.getFullName())


// Constructor Injection
// import { Animal, getLuckyNumber, MAGIC_NUMBER } from './animal';

// const tiger = new Animal("Tiger", 4);
// console.log(tiger.getSpecies())
// console.log(getLuckyNumber())

// CommonJS Module System
// require()
// module.exports

// ES6 Module System
// - import 
// - export


// Decorators : 
// - functions with meta information
// - Prefixed with '@'
// - Decorator Types :
    // - Class - @Component(), @Directive(), @Pipe(), @Injectable(), @NgModule()
    // - Property - @Input(), @Output(), @ViewChild() etc
    // - Methods - @HostListener()
    // - Parameters - @Inject(), @Optional etc

// Angular