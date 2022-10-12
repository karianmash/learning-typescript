"use strict";
// Introduction to TypeScript
//1. Primitive types
// -----------------------------------------------------------------------------------------------------
//(a) String type
// let firstName: string;
// firstName = "damaris";
// console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));
// -----------------------------------------------------------------------------------------------------
//(b) Number type
// let age: number;
// age = 22;
// console.log(age);
// -----------------------------------------------------------------------------------------------------
//(c) Boolean type
// let c: boolean;
// c = true;
// if (c) {
//   console.log("c is true");
// }
// -----------------------------------------------------------------------------------------------------
// Type Annotation
// function getName(i: number): string {
//   const names: string[] = ["Damaris", "Macharia", "Ian"];
//   return names[i];
// }
// const n: string = getName(0).toUpperCase();
// console.log(n);
// -----------------------------------------------------------------------------------------------------
// Type Inference
// let e = "Ian";
// NB
// If you want to use a variable without the concept of type inference use type any
// type any works just like a normal Js
// let dom: any = 10;
// dom = "Something!"
// -----------------------------------------------------------------------------------------------------
//(d) Symbol
// NB, it is a rarely used data type
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value
// or just a Symbol — that's guaranteed to be unique.
// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// console.log(sym2);
// -----------------------------------------------------------------------------------------------------
//(e & f) Undefined & Null
// let y1: undefined = undefined;
// let z1: null = null;
// console.log(y1, z1);
// NB
// These types don't have much use unless strictNullChecks is enabled in
// the tsconfig.json file.
// -----------------------------------------------------------------------------------------------------
//2. Reference Types
// -----------------------------------------------------------------------------------------------------
//(a) Objects
// let person: { name: string; age: number; laptop?: string } = {
//   name: "Ian",
//   age: 22,
//   laptop: "Macbook Air",
// };
// console.log(person.name, person.age);
// -----------------------------------------------------------------------------------------------------
//(b) Arrays
// TypeScript has a specific syntax for typing arrays.
// const names: string[] = [];
// names.push("Dylan"); // no error
// let arrayA: (number | string | boolean | Object)[] = [
//   "dfdvds",
//   "fhgfh",
//   "fghds",
//   12,
//   true,
//   { name: "fygdh" },
// ];
// let s = arrayA[5];
// console.log(s);
// The readonly keyword can prevent arrays from being changed.
// const names1: readonly string[] = ["Damaris"];
// names1.push("Jack"); // Error: Property 'push' does not exist on type 'readonly
// -----------------------------------------------------------------------------------------------------
//(c) Tuple- Is an array with fixed-length
// A grouped set of values (array) where you know how many values are in there
// and their data types
// let names: [string, string] = ["Ian", "Damaris", "Macharia"];
// let StudentName: [string, string] = ["Evans", "Muinde"];
// Tuples only have strongly defined types for the initial values,
// but what if we want to add more values
// A good practice is to make your tuple readonly
// let ourTuple: [number, boolean, string];
// ourTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
// ourTuple.push("Something new and wrong");
// console.log(ourTuple);
// Define our readonly tuple
// const ourReadonlyTuple: readonly [number, boolean, string] = [
//   5,
//   true,
//   "The Real Coding God",
// ];
// throws error as it is readonly.
// ourReadonlyTuple.push("Coding God took a day off");
// -----------------------------------------------------------------------------------------------------
//(d) enum
// A predefined set of named constants which make code more easier to refactor
// maintain and understand
// An enum is a special "class" that represents a group of constants
// (unchangeable variables)
// -------------------------------------------
//(i) String Enums
// enum Job {
//   Designer = "Designer",
//   Developer = "Developer",
//   QA = "QA",
//   PM = "PM",
// }
// let person = {
//   name: "Ian Macharia",
//   job: Job.Developer,
// };
// console.log(person);
// -------------------------------------------
// (ii) Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value.
// Then the values will not increment automatically:
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// console.log(StatusCodes.NotFound);
// console.log(StatusCodes.Success);
// -------------------------------------------
// You can use enums for type annotations
// enum Shape {
//   Square = "square",
//   Rectangle = "rectangle",
//   Triangle = "triangle",
//   Circle = "circle",
// }
// type annotations
// let userShape: Shape = Shape.Circle;
// console.log(userShape);
// Also for parameter annotations
// function printShape(s: Shape): void {
//   console.log(s);
// }
// printShape(Shape.Rectangle);
// -------------------------------------------
//(iii) Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto
// increment from that:
// enum CardinalDirections1 {
//   North = 1,
//   East,
//   South,
//   West,
// }
// console.log(CardinalDirections1.North);
// console.log(CardinalDirections1.West);
// -------------------------------------------
// NB: Technically, you can mix and match string and numeric enum values,
// but it is recommended not to do so.
// -----------------------------------------------------------------------------------------------------
// (e) Unions
// It is like a hybrid type where a value can have multiple data types
// let m: string | number = "Ian";
// console.log(m);
// Using the | we are saying our parameter is a string or number
// Note: you need to know what your type is when union types are
// being used to avoid type errors:
// Unions with functions
// function setRedBackground(u: HTMLElement | string): void {
//   let elements: HTMLElement[] = [];
//   // Use selector
//   if (typeof u === "string") {
//     elements = Array.from(document.querySelectorAll(u));
//   }
//   if (u instanceof HTMLElement) {
//     elements.push(u);
//   }
//   elements.forEach((element) => {
//     element.style.background = "red";
//   });
// }
// const bo1 = document.getElementById("bo1");
// // setRedBackground(bo1);
// setRedBackground(".bo1");
// -----------------------------------------------------------------------------------------------------
// (f) Type - aliases
// Aliases and Interfaces allows types to be easily shared between different
// variables/objects.
// An alias basically is a custom name you give to an existing data type
// type Mark = number;
// type Grade = string; // Fail, Pass, Credit, Distinction
// type Result = Mark | Grade;
// let result: Mark = 85;
// let result: Grade = "Fail";
// function printNumber(n: Result): void {
//   console.log(n);
// }
// printNumber(result);
// -----------------------------------------------------------------------------------------------------
// Special types
//(a) Type: any
// any is a type that disables type checking and effectively allows all types
// to be used.
// Example without any
// let u = true;
// u = "string";
// Math.round(u);
// Example with any
// Setting any to the special type any disables type checking:
// let v: any = true;
// v = "string";
// Math.round(v);
// any can be a useful way to get past errors since it disables type checking,
// but TypeScript will not be able to provide type safety, and tools which rely on
// type data, such as auto completion, will not work. Remember, it should be
// avoided  at "any" cost...
//(b) Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the
// below example:
// let e: unknown = 1;
// e = "string";
// e = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   },
// } as { runANonExistentMethod: () => void };
// How can we avoid the error for the code commented out below when we don't
// know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
// if (typeof e === "object" && e !== null) {
//   (e as { runANonExistentMethod: Function }).runANonExistentMethod();
// }
// Although we have to cast multiple times we can do a check in the if to
// secure our type and have a safer casting
// unknown is best used when you don't know the type of data being typed. To
// add a type later, you'll need to cast it.
//(c) Type: never
// never effectively throws an error whenever it is defined.
// Error: Type 'boolean' is not assignable to type 'never'.
// let x: never = true;
// NB: never is rarely used, especially by itself, its primary use is in advanced
// generics.
// -----------------------------------------------------------------------------------------------------
// Classes
// class Person {
//   private hobbies: string[] = ["Hiking"];
//   constructor(public age: number, private readonly name: string) {}
//   public Walk() {
//     console.log(`${this.name} is Walking`);
//     // this.name = "Mercy";
//   }
//   public getHobbies() {
//     return this.hobbies;
//   }
// }
// const ann = new Person(12, "Ann Maina");
// console.log(ann);
// console.log(ann.age);
// console.log(ann.getHobbies());
// class Employee {
//   private employees: string[] = [];
//   public addEmployee(name: string) {
//     // Logic and Validation before adding an Employee
//     this.employees.push(name);
//   }
// }
// const e = new Employee();
// e.addEmployee("Hezron");
// console.log(e);
// Inheritance
class Vehicle {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.parts = ["Wheels", "side mirrors"];
    }
    fuel() {
        console.log("Fueling...");
    }
    speed() {
        console.log("Speeding");
    }
}
class Car extends Vehicle {
    constructor(carName, color, seats) {
        super(carName, color);
        this.carName = carName;
        this.color = color;
        this.seats = seats;
        this.owner = "Antony";
    }
    print() {
        console.log(Car.weight);
    }
    get getOwner() {
        return this.owner;
    }
    set setOwner(val) {
        this.owner = val;
    }
    speed() {
        console.log("Speeding at 120");
    }
    addParts(part) {
        this.parts.push(part);
    }
    getCarSpecs() {
        return (carName, );
    }
}
Car.weight = "1200kg";
const c = new Car("Mercedes Benz", "Black", 4);
console.log(c.addParts("Rear Mirror"));
// console.log(Math.PI);
// abstract class Employee{
//   abstract getSalary():void
// }
// class FulltimeEmployee extends Employee{
// getSalary(): void {
//     console.log('12000000');
// }
// }
// class PartTimeEmployee extends Employee{
// getSalary(): void {
//     console.log(1230000);
// }
// }
// type Persons={
//    firstname:string
//     age:number
//     walk:()=>void
// }
// interface Person{
//      readonly firstname:string
//     age?:number
//     walk:()=>void
// }
// let student:Person;
// student={
//     firstname:'Collins',
//     age:10,
//     walk(){
//         console.log("Walking");
//     },
// }
// console.log(student);
// let students :Person[]=[
//     {
//     firstname:'Collins',
//     age:10,
//     walk(){
//         console.log("Walking");
//     }
// },
//  {
//     firstname:'Collins',
//     age:10,
//     walk(){
//         console.log("Walking");
//     }
// }
// ]
// interface add{
//     (a:number,b:number):number
// }
// function addNumber(a:number, b:number){
//  return a+b
// }
// let x:add= addNumber
// console.log(x(12,34));
// interface Humans{
// breath?:()=>void
// name:string
// age:number
// }
// interface A extends Humans{
//     weight:string
// }
// interface B  extends A{
//     talk:()=>void
// }
// class Human  implements B{
// talk(){
// }
// weight:string=''
// name:string='Name1'
// age:number=19
// run(){
//     console.log();
// }
// }
// Advanced SVGUnitTypes   // let a= 20
// const b=10
// const add = (a:number=34, b:number)=>{
// return a+b
// }
// console.log(add(23,43));
// let a:string[]=['a','b','c']
// let b:string[]=[...a,'d','e','f']
// const add =(...numbers:number[])=>{
//     return numbers.reduce((current,value)=>{
//         return current+value
//     },0)
// }
// console.log(add(1,2,3,4,55,7,5))
// let trainee:string[]=['Ann','Hezron','Alex', 'Judy', 'Felix']
// let x=trainee.sort()
// let[a, ...rest]=x
// console.log(rest);
// interface Person{
//     firstname:string
//     lastname:string
//     age:number
// }
// let mildred:Person;
// mildred={
//     firstname:'Mildred',
//     lastname:'Ochieng',
//     age:10
// }
// console.log(mildred);
// const{lastname}=mildred
// console.log(lastname);
// let a=['a','b','c','d']
// let [x,,,q]=a
// console.log(x,q);
// type Custom1= string|boolean
// type Combined =Custom & Custom1
// type Combined1 =Custom |Custom1
// type Custom = string|number
// const add=(a:Custom, b:Custom)=>{
//     if(typeof a =='string' || typeof b =="string"){
//         return a.toString() + b.toString()
//     }
//     return a+b
// }
// console.log(add(34, 10));
// IN
// interface Person{
//     firstname:string
//     lastname:string
//     age:number
// }
// let mildred:Person;
// mildred={
//     firstname:'Mildred',
//     lastname:'Ochieng',
//     age:10
// }
// for(let keys in mildred){
// console.log(keys);
// }
// interface Admin{
//     name:string
//     priveleges:string[]
// }
// interface User{
//     name:string
//     privileges:['read']
//     enrolled:Date
// }
// type personX = User | Admin
// let x:User={
//     name:'Ann',
//     privileges:['read'],
//     enrolled:new Date()
// }
// let y:Admin={
//     name:'John',
//     priveleges:['read', 'write','update']
// }
// function CheckPerson(emp:personX){
// console.log(emp.name);
// if('enrolled' in emp){
//    console.log(emp.enrolled);
// }
// }
// CheckPerson(y)
// CheckPerson(x)
// class Car{
//     speed(){
//         console.log('car Speeding...');
//     }
// }
// class Truck{
//     speed(){
//         console.log('Truck Speeding..');
//     }
//     cargo(){
//         console.log('Loading Cargo ...');
//     }
// }
// type vehicle= Car |Truck
// const checkVehicle=(V:vehicle)=>{
// V.speed()
// // if('cargo'in V){
// //     V.cargo()
// // }
// if(V instanceof Truck){
//     V.cargo()
// }
// }
// const c= new Car()
// const t = new Truck()
// checkVehicle(c)
// checkVehicle(t)
// let x:User={
//     name:'Ann',
//     type:'user',
//     privileges:['read'],
//     enrolled:new Date()
// }
// let y:Admin={
//     type:'admin',
//     name:'John',
//     priveleges:['read', 'write','update']
// }
// interface Admin{
//     type:'admin'
//     name:string
//     priveleges:string[]
// }
// interface User{
//     type:'user'
//     name:string
//     privileges:['read']
//     enrolled:Date
// }
// type PersonX=Admin|User
// function CheckPerson(person:PersonX){
//     switch(person.type){
//         case 'admin':
//             console.log(person.priveleges);
//             break;
//         case 'user':
//             console.log(person.enrolled);
//             break
//     }
// }
// CheckPerson(x)
// CheckPerson(y)
// let p = document.querySelector('p')!
// console.log(p);
// let input = document.querySelector('#input')! as HTMLInputElement
// input.value='Learning Typescript '
// console.log(input);
// interface Data{
//     [key:string]:number
// }
// interface Error {
//     [x:string]:string
// }
// // let val:Error={message:'Error'}
// // console.log(val);
// let age:Data={age:23}
// let ages:Data[]=[
//     {age:34},
//     {age:34},
//     {age:34},
//     {dgh:34},
// ]
//  type Custom = string|number
// function add(a:number, b:number):number
// function add(a:string, b:string):string
// function add(a:string, b:number):string
// function add(a:number, b:string):string
// function add(a:Custom, b:Custom){
//     if(typeof a =='string' || typeof b =="string"){
//         return a.toString() + b.toString()
//     }
//     return a+b
// }
// let res=add(12, 10)
// console.log(res);
// let x={
//     firstname:'Jay',
//     job:{field:{description:'Developer'}}
// }
// console.log(x?.job?.field?.description);
// let x = ''
// let y =x ?? "DEFAULT"
// console.log(y);
// Generics
// const person:Array<string>=['Joe', 'Pesh']
// console.log(person);
// interface Posts{
// userId: number
// id: number
// title:string
// body:string
// }
// const prom: Promise<Posts[]> = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         // resolve('Hello Typescipt')
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response=>response.json())
//         .then(data=>resolve(data))
//     },2000)
// })
// prom.then(data=>data.map(item=>{
//     // console.log(item.body.toLocaleUpperCase());
// }))
// function merge<T extends object,U extends object>(objA:T, objB:U){
//     return Object.assign(objA,objB)
// }
// const merged=merge({name:'Joe'},{age:30});
// console.log(merged);
// function countandPrint<T extends{length:number}>( value :T):[T,string]{
//     let text = 'The count is 0'
//      if(value.length ==1){
//         text='You have one element'
//     }
//     if(value.length>1){
//         text =`you have ${value.length} elements`
//     }
//     return [value, text]
// }
// console.log(countandPrint([1,2,3,4,5,6,7,8]));
// function checkProp<T extends object,U extends keyof T>(ObjC:T,key:U){
//     return ObjC[key]
// }
// console.log(checkProp({name:'Jason'},'name'));
// class DataStore<T>{
//     private data:T[]=[]
//     addItem(item:T){
//        return  this.data.push(item)
//     }
//     removeItem(item:T){
//        return this.data.splice(this.data.indexOf(item), 1)
//     }
//     getItems(){
//         return [...this.data]
//     }
// }
// const ds= new DataStore<string>()
// ds.addItem('Jonathan')
// ds.addItem('Ebvans')
// ds.addItem('Amos')
// ds.removeItem('Jonathan')
// console.log(ds.getItems());
// const dsnum= new DataStore<number>()
// dsnum.addItem(23)
// dsnum.addItem(34)
// dsnum.addItem(56)
// dsnum.removeItem(34)
// console.log(dsnum.getItems());
// const dsobj= new DataStore()
// dsobj.addItem({name:'Joe'})
// dsobj.addItem({name:'joy'})
// dsobj.addItem({name:'Jay'})
// dsobj.removeItem({name:'Joy'})
// console.log(dsobj.getItems());
// interface Person{
//     firstname:string
//     lastname:string
//     age:number
// }
// function addItems(firstname:string ,lastname:string ,age:number){
//     let person :Partial<Person>={}
//     person.firstname='as'+firstname
//     person.lastname=lastname
//     person.age=age
//     return person as Person
// }
// const people:Readonly<string[]>=['Madj', 'nnbf']
// function makeState<T extends string|number =number>(){
//     let state:T[]=[]
//     function getState(){
//         return state
//     }
//     function setState(x:T){
//         return state.push(x)
//     }
//     return{getState,setState}
// }
// // const {setState,getState}= makeState()
// // setState(12)
// // console.log(getState());
// // // strings
// // setState<string>('s')
// // console.log(getState());
// const numberState=makeState()
// numberState.setState(12)
// console.log(numberState.getState());
// const stringState=makeState<string>()
// numberState.setState(12)
// console.log(numberState.getState());
// Decorators
// function Log(){
//    return  function(Constructor:Function){
//     console.log('Class Decorator');
// }}
// function Component(parentroot:string, child:string){
//     return function <T extends{new(...arg:any[]):{name:string}}>(ParentConstructor:T){
//       return class extends ParentConstructor{
//         constructor(...arg:any[]){
//             super()
//             const element= document.getElementById(parentroot)
//          if(element){
//             element.innerHTML=child + this.name
//          }
//         }
//       }
//     }
// }
// function Log1(){
//     return function(target:any, propertyName:string){
//         console.log('Property Decorator');
//         console.log(target);
//         console.log(propertyName);
//     }
// }
// function Log2(){
//     return function(target:any, propertyName:string, desciptor:PropertyDescriptor){
//         console.log('Method Decorator');
//         console.log(target);
//         console.log(propertyName);
//         console.log(desciptor);
//          return Object.defineProperty(target,propertyName,{
//             enumerable:true,
//             writable:false
//         })
//     }
// }
// function Log3(){
//     return function(target:any, propertyName:string, desciptor:PropertyDescriptor){
//         console.log('Accessor Decorator');
//         console.log(target);
//         console.log(propertyName);
//         console.log(desciptor);
//         return Object.defineProperty(target,propertyName,{
//             enumerable:true,
//             writable:false
//         })
//     }
// }
// function Log4(){
//     return function(target:any, parameterName:string,position:number){
//         console.log('Parameter Decorator');
//         console.log(target);
//         console.log(parameterName);
//         console.log(position);
//     }
// }
// @Log()
// @Component('root', `
// <h1>Using Decorators</>
// <p> Hello </>
// `)
// class Vehicle{
//     @Log1()
//     name:string='Mercedes'
//         private _price:number=122344
//         @Log3()
//         get price(){
//             return this._price
//         }
//     constructor(){
//     }
// @Log2()
// buy(){
//     console.log('Buying');
// }
// speed( value:number, @Log4()cartype:string){
//     return value
// }
// }
// Type Manipulation
//  type Point={ x:number, y:number}
//  type Example = keyof Point
//  let a:Example='x'
//  let b:Example='y'
// //  Condition Type
// interface Animal{
//     name?:string
// }
// interface Dog{
//     weight:string
//     bark:()=>string
// }
//  type A= Dog & Animal
//  let pet:A={
//     name:'Pet A',
//     weight:'25kg',
//     bark:()=>'Hello'
//  }
// type check=Dog extends Animal ? 'Dog':'Unknown'
// type User='User'
// type ElevatedUser=`Elevated${User}`
// type Gender='Male'|'Female'
// interface Project{status: 'Started'|'OnGoing'}
// let projectstatus:Project={status:'Started'}
// interface Todo{
//     title?:string,
//     description:string
//     enddate:Date
// }
// type TodoReadonly=Readonly<Todo>
// const todo3:TodoReadonly={
//     description:'Description',
//     enddate:new Date()
// }
// type TitleDesc= Omit<Todo, 'description'|'title'>
// let d:TitleDesc={
//   enddate:new Date()
// }
// type excluded= Exclude<'a'|'b'|'c'|'d','a'|'b'>
// type person ='Ian'|'Evans'|'Judy'
// type exc=Extract<'a'|'b'|'c','a'|'b'>
// type non =NonNullable<string|number|boolean|null|undefined>
// const TodoAssign:Record<person,Todo>={
//     'Evans':  {title:'Todo1',description:'Description',enddate:new Date()},
//     'Ian'  :  {title:'Todo1',description:'Description',enddate:new Date()},
//     'Judy' :  {title:'Todo1',description:'Description',enddate:new Date()}
// }
// console.log(TodoAssign);
// type str=ReturnType< ()=> number>
// const todo1:TodoRequired={
//     enddate:new Date(),
//       title:'Todo1',
//     description:'Description',
// }
// const todo3:TodoReadonly={
//     title:'Todo1',
//     description:'Description',
//     enddate:new Date()
// }
// todo3.description='hgfvhv'
// function UpdateTodo(todo:Todo,updateTodo:Partial<Todo>):Todo{
//     return{...todo, ...updateTodo}
// }
// const s = UpdateTodo(todo3, {description:'Updated'})
// let todo2:Partial<Todo>={}
// todo2.title='cvh;'
// todo2.description='jhvbn'
// todo2.enddate=new Date()
// console.log(todo2);
// class Example{
//     name?:string='gfdh'
//     test(){
//         console.log('Testing');
//     }
//     test1?(){
//         console.log('this is test one');
//     }
// }
// const e= new Example()
// type Example1= InstanceType <typeof Example>
// let xs:Example1={
// name:'gfhn',
// test:()=> 'Tst',
// }
// interface Suppliers{
//     product_id:string
//     product_name:string
//     price:string
// }
// interface Product extends Suppliers{
//     productid:string
//     product:string
//     selling_price:string
// }
// let somedata:Product={
//     product_id:'string',
//     product:'string',
//     price:'string',
//     productid:'jhfgv',
//     product_name:'string',
//     selling_price:'string',
// }
// console.log(somedata);
