// Type: any
// any is a type that disables type checking and effectively allows all types 
// to be used.

// Example without any
let u = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to 
// parameter  of type 'number'.

// Example with any
// Setting any to the special type any disables type checking:
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// any can be a useful way to get past errors since it disables type checking, 
// but TypeScript will not be able provide type safety, and tools which rely on 
// type data, such as auto completion, will not work. Remember, it should be 
// avoided  at "any" cost...




// Type: unknown
// unknown is a similar, but safer alternative to any.

// TypeScript will prevent unknown types from being used, as shown in the 
// below example:
let e: unknown = 1;
e = "string"; // no error
e = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't 
// know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof e === 'object' && e !== null) {
  (e as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to 
// secure our type and have a safer casting
// unknown is best used when you don't know the type of data being typed. To 
// add a type later, you'll need to cast it.



// Type: never
// never effectively throws an error whenever it is defined.
// Error: Type 'boolean' is not assignable to type 'never'.
let x: never = true;

// NB: never is rarely used, especially by itself, its primary use is in advanced 
// generics.



// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives 
// undefined and null respectively.
let y1: undefined = undefined;
let z1: null = null;
// These types don't have much use unless strictNullChecks is enabled in 
// the tsconfig.json file.

