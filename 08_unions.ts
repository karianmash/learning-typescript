// It is like a hybrid type where a value can have multiple data types
let m: string | number = "Ian";
// Using the | we are saying our parameter is a string or number

// Note: you need to know what your type is when union types are 
// being used to avoid type errors:

// Unions with functions
function setRedBackground (u: HTMLElement | string): void {
    let elements: HTMLElement[] = [];

    // Use selector
    if(typeof u === "string") {
        elements = Array.from(document.querySelectorAll(u));
    }

    if (u instanceof HTMLElement) {
        elements.push(u)
    }

    elements.forEach(element => {
        element.style.background = "red";
    })
}

const bo1 = document.getElementById("bo1");
// setRedBackground(bo1);
setRedBackground(".bo1");