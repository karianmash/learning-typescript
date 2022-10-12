// TypeScript comes with a large number of types that can help with some common
// type manipulation, usually referred to as utility types.

// Some popular ones

// Partial
// Partial changes all the properties in an object to be optional.
interface Point1 {
  x2: number;
  y2: number;
}
// `Partial` allows x and y to be optional
let pointPart: Partial<Point1> = {};
pointPart.x2 = 10;

// Required
// Required changes all the properties in an object to be required.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};

// Record
// Record is a shortcut to defining an object type with a specific key type and
// value type.
const nameAgeMap1: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};
// Record<string, number> is equivalent to { [key: string]: number }

// Omit
// Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
  // `Omit` has removed age and location from the type and
  //   they can't be defined here
};

// Pick
// Pick removes all but the specified keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob1: Pick<Person, "name"> = {
  name: "Bob",
  // `Pick` has only kept name, so age and location were removed from the type
  //   and they can't be defined here
};

// Exclude
// Exclude removes types from a union.
type Primitive = string | number | boolean;
// a string cannot be used here since Exclude removed it from the type.
const value: Exclude<Primitive, string> = true;

// ReturnType
// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number };

const point2: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

// Parameters
// Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number }) => void;
const point3: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20,
};
