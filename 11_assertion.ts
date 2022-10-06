// It's just like type casting in other languages
// You use it when you know more than the compiler

// It means that when a function returns a generic type, you gonna 
// type assertion to assign it a specific type
// eg <input id="myInp" type="text">

// HTMLInputElement.value
const myInp = <HTMLInputElement>document.getElementById("myInp");
// OR
// const myInp = document.getElementById("myInp") as HTMLInputElement;

console.log(myInp.value);



// Casting is the process of overriding a type.
// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will 
// directly change the type of the given variable.
let xa: unknown = 'hello';
console.log((xa as string).length);



// Casting with <>
// Using <> works the same as casting with as.
let xa1: unknown = 'hello';
console.log((<string>x).length);


// NB: This type of casting will not work with TSX, such as when working on 
// React files.



// Force casting
// To override type errors that TypeScript may throw when casting, first cast to 
// unknown, then to the target type.
let x2 = 'hello';
// x is not actually a number so this will return undefined
console.log(((x2 as unknown) as number).length);