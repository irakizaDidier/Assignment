// 1. String Transformations:

// a. capitalize(str)
// Capitalizes the first letter of a string.

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('irakiza'))

// b. reverse(str)
// Reverses a string.

function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('irakiza'))

// c. isPalindrome(str)
// Checks if a string is a palindrome (reads the same backward as forward).

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('didier'))

// d. wordCount(str)
// Counts the number of words in a string.

function wordCount(str) {
    let count = 0;
    let inWord = false;
    const length = str.length;

    for (let i = 0; i < length; i++) {
        const char = str[i];
        if (char !== ' ' && char !== '\t' && char !== '\n') {
            if (!inWord) {
                inWord = true;
                count++;
            }
        } else {
            inWord = false;
        }
    }

    return count;
}
console.log(wordCount('Habimana Irakiza'));

// 2. Array Transformations

// a. double(arr)
// Doubles every number in an array.

function double(arr) {
    return arr.map(num => num * 2);
}
console.log(double([1, 2, 3]))

// b. filterEven(arr)
// Filters out even numbers from an array.

function filterEven(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterEven([1, 2, 3, 4]))

// c. sum(arr)
// Calculates the sum of all numbers in an array.

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4]))

// d. average(arr)
// Calculates the average of all numbers in an array.

function average(arr) {
    if (arr.length === 0) return 0;
    return sum(arr) / arr.length;
}
console.log(average([1, 2, 3, 4]))

// 3. Object Transformations
// a. fullName(person)
// Returns the full name of a person object (given properties firstName and lastName).

const person1 = {
    firstName: "Didier",
    lastName: "Irakiza",
    age: 25
};
const person2 = {
    firstName: "Patrick",
    lastName: "Iradukunda",
    age: 17
};
const person3 = {
    firstName: "Claude",
    lastName: "Ishimwe",
    age: 16
};

function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

// a. fullName(person) 
// Returns the full name of a person object (given properties firstName and lastName).

function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

// b. isAdult(person) 
// Checks if a person is 18 or older (given property age).
function isAdult(person) {
    return person.age >= 18;
}

// c. filterByAge(people, minAge) 
// Filters an array of person objects to keep only those at least minAge years old.

function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

console.log(fullName(person1));
console.log(isAdult(person1));
console.log(isAdult(person2));

const people = [person1, person2, person3];
console.log(filterByAge(people, 18));

// 4. Function Composition
// Function composition allows combining multiple functions to create more complex transformations.

// a. compose(...fns)
// Creates a function that is the composition of the input functions.

function compose(...fns) {
    return function (initialValue) {
        return fns.reduceRight((acc, fn) => fn(acc), initialValue);
    };
}


// Example usage:

// const capitalizee = str => str.charAt(0).toUpperCase() + str.slice(1);
// const reversee = str => str.split('').reverse().join('');

const reverseAndCapitalize = compose(capitalize, reverse);
console.log(reverseAndCapitalize("hello"));