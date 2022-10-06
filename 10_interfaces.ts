// Interfaces are similar to type aliases, except they only apply to object types

// A set of rule for something else like an object to follow and abid by
// Interface names should be past tense
interface Named {
    name: string
}

function sayName(o: Named): void {
    console.log(o.name);
}

const bottle = {
    litres: 1,
    name: "Dom's Bottle"
}

sayName(bottle);

// With functions
interface Printable {
    print(): void;
}

const dom1 = {
    name: "Dom",
    age: 76,
    print: function () {
        console.log("My name is " + this.name + " and I am" + this.age);
    }
};

function bottle1(p: Printable) {
    p.print()
}
bottle1(dom1);



// Extending Interfaces
// Extending an interface means you are creating a new interface with the 
// same properties as the original, plus something new.
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};