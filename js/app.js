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
  hoursOperation: ['6am:',
    '7am:',
    '8am:',
    '9am:',
    '10am:',
    '11am:',
    '12pm:',
    '1pm:',
    '2pm:',
    '3pm:',
    '4pm:',
    '5pm:',
    '6pm:',
    '7pm:'
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