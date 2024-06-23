'use strict'

//1. Object Creation Basics
// Task: Create an object representing a superhero with properties like name, secretIdentity, powers (an array), and weakness.

let superhero = {
    name: "Shadow Avenger",
    secretIdentity: "Irakiza Didier",
    powers: ["Invisibility", "Super Strength", "Flight"],
    weakness: "Kryptonite"
};

console.log(superhero);

// 2. Methods and Functionality
// Task: Add methods to the superhero object: usePower(powerName): Logs a message about the hero using a specific power.
// revealIdentity(): Logs the hero’ s secret identity.

superhero.usePower = function (powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} doesn't have the power ${powerName}.`);
    }
};

superhero.revealIdentity = function () {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

superhero.usePower("Invisibility");
superhero.revealIdentity();

// 3. Object Constructors
// Task: Create a Superhero constructor function to streamline the creation of multiple superheroes.

function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
}

let hero1 = new Superhero("Shadow Avenger", "Irakiza Didier", ["Invisibility", "Super Strength", "Flight"], "Kryptonite");
let hero2 = new Superhero("Fire Bender", "Habimana Strong", ["Fire Control", "Heat Resistance"], "Water");

console.log(hero1);
console.log(hero2);

// 4. Prototypal Inheritance
// Task: Extend the functionality of your superheroes using prototypal inheritance.

Superhero.prototype.usePower = function (powerName) {
    if (this.powers.includes(powerName)) {
        console.log(`${this.name} uses ${powerName}!`);
    } else {
        console.log(`${this.name} doesn't have the power ${powerName}.`);
    }
};

Superhero.prototype.revealIdentity = function () {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
};

hero1.usePower("Flight");
hero2.revealIdentity();

// 5. Object Iteration and Transformation
// Task: Use forEach, map, or filter to manipulate an array of superheroes and supervillains

let characters = [
    new Superhero("Shadow Avenger", "Irakiza Didier", ["Invisibility", "Super Strength", "Flight"], "Kryptonite"),
    new Superhero("Fire Bender", "Habimana Strong", ["Fire Control", "Heat Resistance"], "Water"),
    {
        name: "Dark Shadow",
        type: "villain",
        powers: ["Dark Magic"],
        weakness: "Light"
    },
    {
        name: "Frostbite",
        type: "villain",
        powers: ["Ice Control"],
        weakness: "Fire"
    }
];

// using forEach to log all character names
characters.forEach(character => {
    console.log(`${character.name} is a ${character.type || "hero"}`);
});

// using map to transform all hero names into uppercase
let heroNamesUpperCase = characters.map(character => character.type !== "villain" ? character.name.toUpperCase() : character.name);
console.log("Hero names in uppercase: ", heroNamesUpperCase);

// using filter to get only the villains
let villains = characters.filter(character => character.type === "villain");
console.log("Villains: ", villains);