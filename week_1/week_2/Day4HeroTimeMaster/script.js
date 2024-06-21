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

function Clock() {
    let currentTime = new Date();
    // console.log("this is this: ", this)
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
}

// Evaluation:
let myClock = new Clock();
console.log("Clock Instance: ", myClock);
console.log("Hours: ", myClock.hours);
console.log("Minutes: ", myClock.minutes);
console.log("Seconds: ", myClock.seconds);

// Challenge 3: Time Formatting
// Add methods to the Clock object for formatting time.

Clock.prototype.getFormattedTime = function () {
    let hours = this.hours < 10 ? '0' + this.hours : this.hours;
    let minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    let seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    return `${hours}:${minutes}:${seconds}`;
};

Clock.prototype.get12HourTime = function () {
    let hours = this.hours % 12 || 12;
    let minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    let seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
    let period = this.hours >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}:${seconds} ${period}`;
};

//Evaluation:

console.log("Formatted Time: ", myClock.getFormattedTime());
console.log("12-Hour Format Time: ", myClock.get12HourTime());