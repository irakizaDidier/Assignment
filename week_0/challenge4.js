"use strict";

// challenge 4

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

const averageTotal = calcAverage(totals);

console.log('Bills:', bills); // Output: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
console.log('Tips:', tips); // Output: [4.4, 44.25, 35.2, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]
console.log('Totals:', totals); // Output: [26.4, 339.25, 211.2, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]
console.log('Average Total:', averageTotal); // Output: average of the totals array