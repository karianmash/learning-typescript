// Explict Type
// Explicit - writing out the type:
let firstName: string = "Dylan";

// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName1 = "Dylan";

// Note: Having TypeScript "guess" the type of a value is called infer.

// Implicit assignment forces TypeScript to infer the value.

// Implicit type assignment are shorter, faster to type, and often used when 
// developing and testing.


// Unable to Infer
// TypeScript may not always properly infer what the type of a variable may be. 
// In such cases, it will set the type to any which disables type checking.

// Implicit any as JSON.parse doesn't know what type of data it returns so it 
// can be "any" thing...
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like 
// this example
console.log(typeof json);

// This behavior can be disabled by enabling noImplicitAny as an option in a 
// TypeScript's project tsconfig.json. That is a JSON config file for customizing
//  how some of TypeScript behaves.

// Note: you may see primitive types capitalized like Boolean
// boolean !== Boolean