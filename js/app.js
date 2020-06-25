/* eslint-disable no-redeclare */
'use strict';
console.log('app.js is connected.');

//Constructor Function

function randomCustperhr(min,max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}
var hoursOperation = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];

function Salmon(name, minCust, maxCust,avgCookiesale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesale = avgCookiesale;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
}
Salmon.prototype.custPerHr = function() {
  for (var i = 0; i <hoursOperation.length; i++) {
    this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
  }
};
Salmon.prototype.calcCookiesPerHour = function() {
  this.custPerHr();
  for (var i = 0; i <hoursOperation.length; i++) {
    this.cookiesPerHour.push(Math.ceil(this.customerPerHour[i] * this.avgCookiesale));
  }
};
Salmon.prototype.calcTotal = function() {
  this.calcCookiesPerHour();
  for (var i = 0; i <this.cookiesPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
  }
};
//To rendor the table

// var tableRow = document.createElement('tr');
// var tableData = document.createElement('td');
//Create Table Header

var storeOne = new Salmon('Seattle',23,65,6.3);
var storeTwo = new Salmon('Tokyo', 3, 24, 1.2);
var storeThree = new Salmon('Dubai', 11, 38, 3.7);
var storeFour = new Salmon('Paris',20,38,2.3);
var storeFive = new Salmon('Lima',2,16,4.6);

var allStore = [storeOne, storeTwo, storeThree, storeFour, storeFive];

var newTable = document.getElementById('salmon-table');

Salmon.prototype.render = function() {
  this.calcTotal();
  var newTableHead = document.createElement('thead');
  newTable.appendChild(newTableHead);

  // Create table row
  // var tableHead = document.createElement('tr');
  var newRow = document.createElement('tr');
  newRow.textContent = this.name;
  newTable.appendChild(newRow);
 
  //Create table data
  
  // for(var i = 0; i < hoursOperation.length; i++) {
  //   var custPerTD = document.createElement('td');
  //   custPerTD.textContent = this.customerPerHour[i];
  //   newRow.appendChild(custPerTD);
  // }
 
  for(var i = 0; i < hoursOperation.length; i++) {
    var cookPerTD = document.createElement('td'); 
    cookPerTD.textContent = this.cookiesPerHour[i];
    newRow.appendChild(cookPerTD);
  }
  var totalTD = document.createElement('td');
  totalTD.textContent = this.totalCookies[i];
  newRow.appendChild(totalTD);
};
//To create instance use the new to call constructor function


for (var i = 0; i < allStore.length; i++){
  allStore[i].render();
}
// Creats table footer
var newFooter = document.createElement('tfoot');
newFooter.textContent='Total Hourly';
newTable.appendChild(newFooter);