'use strict'

// Challenge 1: Time Object Basics
//Create a JavaScript Date object to represent the current time.

let currentTime = new Date();
console.log("Current Time: ", currentTime);
// Evaluation:
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

console.log("Hours: ", hours);
console.log("Minutes: ", minutes);
console.log("Seconds: ", seconds);

// Challenge 2: Object Oriented Clock
//Design a Clock object with properties like hours, minutes, and seconds