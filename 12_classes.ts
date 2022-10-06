// TypeScript adds types and visibility modifiers to JavaScript classes.

// Members: Types
// The members of a class (properties & methods) are typed using type annotations, 
// similar to variables.
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("Jane");



// Members: Visibility
// Class members also be given special modifiers which affect visibility.
// public(defaul), private, protected
class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("Jane");
 // person.name isn't accessible from outside the class since it's private
console.log(person1.getName());

// NB: The this keyword in a class usually refers to the instance of the class.




// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor 
// by adding a visibility modifiers to the parameter.
class Person2 {
  // name is a private member variable
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("Jane");
console.log(person2.getName());



// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being
// changed.
class Person3 {
  private readonly name: string;

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be 
    // either at it's declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("Jane");
console.log(person3.getName());



// Inheritance: Implements
// Interfaces can be used to define the type a class must follow 
// through the implements keyword.
interface Shape1 {
  getArea: () => number;
}

class Rectangle implements Shape1 {
    protected readonly width1: number
    protected readonly height1: number

  public constructor(width1: number, height1: number) {
    this.width1 = width1;
    this.height1 = height1;
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

// NB: A class can implement multiple interfaces by listing each one after 
// implements, separated by a comma like so: class Rectangle implements Shape, 
// Colored {



// Inheritance: Extends
// Classes can extend each other through the extends keyword. A class can only 
// extends one other class.
interface Shape2 {
  getArea: () => number;
}

class Rectangle1 implements Shape2 {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  // getArea gets inherited from Rectangle
}



// Override
// When a class extends another class, it can replace the members of the parent 
// class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override 
// keyword.
interface Shape3 {
  getArea: () => number;
}

class Rectangle2 implements Shape3 {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class Square1 extends Rectangle2 {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

// NB: By default the override keyword is optional when overriding a method, and 
// only helps to prevent accidentally overriding a method that does not exist. Use 
// the setting noImplicitOverride to force it to be used when overriding.




// Abstract Classes
// Classes can be written in a way that allows them to be used as a base class for
//  other classes without having to implement all the members. This is done by 
// using the abstract keyword. Members that are left unimplemented also use the 
// abstract keyword.
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle3 extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

// NB: Abstract classes cannot be directly instantiated, as they do not have all 
// their members implemented.
