// Part of programming is making sure you *don't repeat yourself* (DRY)
// DRY code is faster to implement and leaves less room for bugs
// defining and calling functions in JS helps you do this

// JS functions

// test();      // you can call the function before defining it (not recommended)
function test() {
    console.log("This is a test");
} // declare the function
test(); // call the function

function argument(student) {
    // accepts an argument in the parentheses
    console.log(`This is my student ${student}`);
}
argument("Claire");
argument(8); // not type specific

function add(x, y) {
    // x + y;  // do not do this! will give you `undefined`
    return x + y;
    // use return if you want to get the value computed in a function
    // outside of the function scope
}
console.log(add(7, 9));
const answer = add(7, 9); // able to assign function output to variable
console.log(answer);