// === classes ===

// classes are an abstraction/template of objects
class Monky {
    // this constructor runs when you initialize a new class
    constructor(name, age, bananaCount, quote) {
        // assign the constructor's parameters as class properties
        this.name = name;
        this.age = age;
        this.bananaCount = bananaCount;
        this.quote = quote;
    }
    changeQuote(newQuote) {
        this.quote = newQuote;
    }
    ageStatement() {
        return `${this.name} is ${this.age} years old.`
    }
}

// instantiate a new Monky object with the `new` keyword
const exampleMonky = new Monky('Savva Petrov', 18, 2000, 'aaaaaa');

// here, exampleMonky is an "instance" to the class Monky

// similar to objects, you can access the class's properties
// observe that we are calling the instance, not the class itself
console.log(exampleMonky.name)

// executing functions
exampleMonky.changeQuote('ooga booga');
console.log(exampleMonky.quote);

console.log(exampleMonky.ageStatement());

// we can create another instance of Monky with totally different properties
// the instances do not affect each other at all
const anotherMonky = new Monky('Monky Monkyton', 2000, 0, 'sus');
anotherMonky.changeQuote('bruh moment');
console.log(exampleMonky, anotherMonky);