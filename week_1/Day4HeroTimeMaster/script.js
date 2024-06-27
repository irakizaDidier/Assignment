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

// Challenge 4: Dynamic Display
// Task: Create a function to display the clock on a webpage.

function displayClock() {
    let clockElement = document.getElementById("clock");
    let clock = new Clock();
    let format = document.getElementById("timeFormat").value;
    if (format === "12") {
        clockElement.innerHTML = clock.get12HourTime();
    } else {
        clockElement.innerHTML = clock.getFormattedTime();
    }
}

setInterval(displayClock, 1000);

// Challenge 5: Clock Customization
// Add options to customize the clock.

// function Clock(options) {
//     let currentTime = new Date();
//     this.hours = currentTime.getHours();
//     this.minutes = currentTime.getMinutes();
//     this.seconds = currentTime.getSeconds();
//     this.format = options && options.format === 12 ? 12 : 24;
//     this.timezoneOffset = options && options.timezoneOffset || 0;
//     this.color = options && options.color || 'black';
// }

// Clock.prototype.getFormattedTime = function () {
//     let hours = (this.hours + this.timezoneOffset) % this.format;
//     hours = hours < 10 ? '0' + hours : hours;
//     let minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
//     let seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
//     return `${hours}:${minutes}:${seconds}`;
// };

// function displayClock(options) {
//     let clockElement = document.getElementById("clock");
//     let clock = new Clock(options);
//     clockElement.style.color = clock.color;
//     clockElement.innerHTML = clock.getFormattedTime();
// }

// setInterval(function () {
//     displayClock({
//         format: 12,
//         timezoneOffset: -5,
//         color: 'red'
//     });
// }, 1000);

// Challenge 6: Advanced Challenge (Optional)
// Build an alarm clock feature that triggers an alert at a specified time.
Clock.prototype.setAlarm = function (hour, minute, second, callback) {
    let alarmTime = new Date();
    alarmTime.setHours(hour);
    alarmTime.setMinutes(minute);
    alarmTime.setSeconds(second);

    let currentTime = new Date();
    let timeToAlarm = alarmTime.getTime() - currentTime.getTime();

    if (timeToAlarm >= 0) {
        setTimeout(callback, timeToAlarm);
    }
};

function setAlarm() {
    let hour = parseInt(document.getElementById("alarmHour").value);
    let minute = parseInt(document.getElementById("alarmMinute").value);
    let second = parseInt(document.getElementById("alarmSecond").value);

    myClock.setAlarm(hour, minute, second, function () {
        let alertElement = document.getElementById("alert");
        alertElement.style.display = 'block';
        alertElement.classList.add('blinking');
        // alert("Go to work Please!!");

        setTimeout(function () {
            alertElement.style.display = 'none';
            alertElement.classList.remove('blinking');
        }, 30000);
    });

}

document.getElementById("setAlarmButton").addEventListener("click", setAlarm);