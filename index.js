// === objects ===

// objects are another way to store multiple values of different types in one place
// you can define an object with curly braces (similar to functions)
const monky = {
    // you must assign properties with the value in an object (they act like key-value pairs)
    firstName: "Monky",
    lastName: "Monkyson",
    bananaCount: 25,
    vibeStatus: true,
    quote: "ooga booga",
    // you can also add functions within objects
    addBanana: function () {
        // the keyword `this` references the object itself that this function is in
        this.bananaCount++;
        // here, we add 1 to bananaCount with the ++ operator
    },
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(monky);

// access different properties of the object `monky` with dot notation
console.log(monky.firstName);
console.log(monky.lastName);

// alter object's properties
console.log(monky.quote);
monky.quote = "lets goooo";
console.log(monky.quote);

// you can execute functions within the object
console.log(monky.bananaCount);
monky.addBanana();
console.log(monky.bananaCount);

console.log(monky.fullName());
