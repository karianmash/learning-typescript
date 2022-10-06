// When Ts tries to guess what data type you were tring to use
let y = 10;
// Error
// y = "Ian";

function getNumber() {
    return 75;
}
let w = getNumber(); // Type number

let element = document.getElementById('id'); // type HTMLElement | null

// If you want to use a variable without the concept of type inference use type any
let b: any = 10;
b = "Ian";