// === Nested Functions ===
// JS lets you define functions within functions, otherwise known as nesting

function doA() {
    function doB() {
        console.log("doB() executed");
    }
    // execute doB() twice
    doB();
    doB();
    console.log("doA() executed");
}
doA();

// however, because doB() only exists inside doA(), we cannot call doB() outside of doA()
doB(); // will result in an error (comment out this line after observing)

// This phenomenon is called "scoping"

// === Scopes in JS ===
// Here's a simple example of how scopes work:
function doSomething() {
    let x = "a variable";
    const y = ":)";
}
console.log(x);
console.log(y);
// these will print `undefined` because the variables are defined within the function
// x can be used anywhere within doSomething() but cannot be used outside of it
// ** x exists in the function scope of doSomething(), but is undefined at the global scope **

function anotherFunction() {
    var z = "works?";
    a = "hello";
}
console.log(z);
console.log(a);
// however, using `var` or no keywords when declaring variables within functions will work
// outside of its function scope. This is MESSY AND UNSAFE; stick to 'let' and 'const'
