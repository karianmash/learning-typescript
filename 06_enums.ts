// A predefined set of named constants which make code more easier to refactor
// maintain and understand
// An enum is a special "class" that represents a group of constants
// (unchangeable variables)

// Numeric Enums - Default
// By default, enums will initialize the first value
// to 0 and add 1 to each additional value:
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
currentDirection = "North";
// Error: "North" is not assignable to type 'CardinalDirections'.

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto
// increment from that:
enum CardinalDirections1 {
  North = 1,
  East,
  South,
  West,
}
// logs 1
console.log(CardinalDirections1.North);
// logs 4
console.log(CardinalDirections1.West);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value.
// Then the values will not incremented automatically:
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enums
// Enums can also contain strings. This is more common than numeric
// enums, because of their readability and intent.
enum Shape {
  Square = "square",
  Rectangle = "rectangle",
  Triangle = "triangle",
  Circle = "circle",
}
// You can use enums for type annotations
let userShape: Shape = Shape.Circle;
console.log(userShape);
// Also for parameter annotations
function printShape(s: Shape): void {
  console.log(s);
}
printShape(Shape.Rectangle);

// NB: Technically, you can mix and match string and numeric enum values,
// but it is recommended not to do so.
