'use strict';
console.log('app.js is connected.');

//Stores the min/max hourly customers,and the average cookies per customer, in object properties

var Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookiesale: 6.3,
  custperhr: 0, //Random customer per hour
  setCustperhr: function () {
    this.custperhr=randomCustperhr(this.minCust,this.maxCust); //Random customer per hour
  },
  cookiespurch: 0, //calc cookies purchased per hour
  setCookiesperhr: function () {
    this.cookiespurch=multiply(this.avgCookiesale,this.custperhr);
  },
  hoursOperation: ['6am:',this.cookiesperhr, 'cookies',
    '7am:',this.cookiesperhr,'cookies',
    '8am:',this.cookiesperhr,'cookies',
    '9am:',this.cookiesperhr,'cookies',
    '10am:',this.cookiesperhr,'cookies',
    '11am:',this.cookiesperhr,'cookies',
    '12pm:',this.cookiesperhr,'cookies',
    '1pm:',this.cookiesperhr,'cookies',
    '2pm:',this.cookiesperhr,'cookies',
    '3pm:',this.cookiesperhr,'cookies',
    '4pm:',this.cookiesperhr,'cookies',
    '5pm:',this.cookiesperhr,'cookies',
    '6pm:',this.coookiesperhr,'cookies',
    '7pm:',this.cookiesperhr,'cookies',
  ],
}
Seattle.setCustperhr();
Seattle.setCookiesperhr();
console.log(Seattle);

//Uses a method of that object to generate a random number of customers per hour

function randomCustperhr(min,max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}
randomCustperhr();

//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

function multiply(a, b) {
  var product = a * b;
  return Math.round(product);
}
multiply();

// Store the results for the array

// function cookiesPerOper () {
        // var = hoursOperation
        // var = arrayLength = hoursOperation.length;
//     for (var i = 0; i <= 13;)(i++); {
//         if i <= 

//     }
// }