// TypeScript has a specific syntax for typing objects.
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

// Object types like this can also be written separately, and even be reused
// Look at Interfaces


// Type Inference
// TypeScript can infer the types of properties based on their values.
const car1 = {
  type: "Toyota",
};
car1.type = "Ford"; // no error
// Error: Type 'number' is not assignable to type 'string'.
car1.type = 2;



// Optional Properties
// Optional properties are properties that don't have to be defined in the 
// object definition.


// Error: Property 'mileage' is missing in type '{ type: string; }' but 
// required in type '{ type: string; mileage: number; }'.
const car2: { type: string, mileage: number } = { 
  type: "Toyota",
};
car2.mileage = 2000;


// Example with an optional property
const car3: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car3.mileage = 2000;


// Index Signatures
// Index signatures can be used for objects without a defined list of 
// properties.
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// Error: Type 'string' is not assignable to type 'number'.
nameAgeMap.Mark = "Fifty";

// Index signatures like this one can also be expressed with utility types 
// like Record<string, number>