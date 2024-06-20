'use strict'
// Task 1: Object Methods and this

const Person = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

// Calling greet() directly
Person.greet();


const anotherPerson = {
    name: "Bob",
    age: 25
};

// Using call()
Person.greet.call(anotherPerson);

// Using apply()
Person.greet.apply(anotherPerson);

// Using bind()
const boundGreet = Person.greet.bind(anotherPerson);
boundGreet();

//Task 2: Event Handlers and this

// document.getElementById('myButton').addEventListener('click', function handleClick() {
//     console.log(this.id);
//     console.log(this.textContent);
// });

document.getElementById('myButton').addEventListener('click', () => {
    console.log(this.id);
    console.log(this.textContent);
});

// Task 3: Private Data with Closures and this

function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(this.count); // this.count is undefined, count is a closure variable
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());

// Task 4: Reusable Component with Closure and this

function createTimer(duration, elementId) {
    let remainingTime = duration;
    const element = document.getElementById(elementId);

    const intervalId = setInterval(function () {
        if (remainingTime > 0) {
            remainingTime--;
            element.textContent = remainingTime;
        } else {
            clearInterval(intervalId);
            console.log('Timer finished');
        }
    }, 1000);
}
console.log(createTimer(10, 'myTimer'));