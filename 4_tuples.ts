// A grouped set of values (array) where you know how many values are in there
// and their data types
type Point = [number, number, string]
let _point: Point = [10, 5, "Ian"];

console.log(_point[1]);

_point[0] = 25;
console.log(point[0]);

_point[2] = "Macharia"
// throws error as it is type string
console.log(point[2]);



// Tuples only have strongly defined types for the initial values, 
// but what if we want to add more values
// A good practice is to make your tuple readonly


// Define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

// Define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');


// Destructuring Tuples
// Since tuples are arrays we can also destructor them.
const graph: [number, number] = [55.2, 41.3];
const [c, d] = graph;