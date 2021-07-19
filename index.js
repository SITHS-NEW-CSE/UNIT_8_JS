//  === conditionals ===

// A core part of programming is implementing a form of logic
// For instance, you want to run different pieces of code (behavior)
// according to the value of a variable:
const age = 25;

// you can implement conditional logic via a if-else statement
if (age >= 18) { // wrap logic with parentheses, define outcome with curly braces
    console.log("adult");
} else {
    console.log("kid");
}
// in this case, the value of `age` is greater than or equal to (>=) 18,
// which is why the code logs "adult" onto console.

// (try changing the variable `age` so you get a different output!)

// you are also able to chain if-else statements for more complicated logic
const age2 = 70;

if (age2 >= 65) {
    console.log("senior");
} else if (age2 >= 18) {
    // follow up `else` with another if-else statement
    console.log("adult");
} else {
    console.log("kid");
}

// *** Be careful of how you arrange your if-statements!! ***
const age3 = 75;
if (age3 >= 18) {
    console.log("adult");
} else if (age3 >= 65) {
    console.log("senior");
} else {
    console.log("kid");
}
// if statements are checked from top to bottom, and skips the rest once a condition
// is true. Because of this, this code logs "adult" even if we expect it to log "senior"

//  === switch statements ===
// Another way to write conditional logic in JS is to use switch statements
// In a switch statement, JS checks the value of a variable (the key) 
// on all "cases" that you define. Here's an example:
const key = 1;

switch (key) {
    case 1: // we check if the key is equal to 1
        console.log("Hello world");
        break; // it is important that you "break" after each defined case

    case 2:
        console.log("Yay!");
        break;

    default: // this "default" case runs when your key doesn't match any case
        console.log(":(");
        break;
}
// (try changing the value of key for different outcomes)