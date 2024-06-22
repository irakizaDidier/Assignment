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