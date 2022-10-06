function getName(i: number): string {
    const names: string[] = ["Ian", "Macharia", "Karimi"]
    return names[i];
}

const n: string = getName(1).toUpperCase();
console.log(n);

// type any works just like a normal Js
let dom: any = 10;
dom = "Something!"

// Type void
function printMessage(message: string): void {
    console.log(message);
}
printMessage("Hey guys");