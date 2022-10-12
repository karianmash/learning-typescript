// Aliases and Interfaces allows types to be easily shared between different 
// variables/objects.

// An alias basically is a custom name you give to an existing data type
type Mark = number;
type Grade = string; // Fail, Pass, Credit, Distinction
type Result = Mark | Grade;

// let result: Mark = 85;
let result: Grade = "Fail";

function printNumber(n: Result): void {
    console.log(n)
}

printNumber(result);

// With generic types
type Pair<T> = [T, T];
let point: Pair<number> = [10,5];