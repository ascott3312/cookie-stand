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
  
}
Seattle.setCustperhr();
console.log(Seattle);

//Uses a method of that object to generate a random number of customers per hour

function randomCustperhr(min,max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}
randomCustperhr();

//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
