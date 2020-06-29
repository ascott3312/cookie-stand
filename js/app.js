/* eslint-disable no-redeclare */
'use strict';
console.log('app.js is connected.');

//Constructor Function
var newTable = document.getElementById('salmon-table');

//Global function and Hours per opertaion variable.
function randomCustperhr(min,max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}
var hoursOperation = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];

// Constructor to create objects for the this lab.
function Salmon(name, minCust, maxCust,avgCookiesale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesale = avgCookiesale;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
}

//Proto type for the COnstructor
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
//To create instance use the new to call constructor function
var storeOne = new Salmon('Seattle',23,65,6.3);
var storeTwo = new Salmon('Tokyo', 3, 24, 1.2);
var storeThree = new Salmon('Dubai', 11, 38, 3.7);
var storeFour = new Salmon('Paris',20,38,2.3);
var storeFive = new Salmon('Lima',2,16,4.6);

var allStore = [storeOne, storeTwo, storeThree, storeFour, storeFive];

//To rendor the table
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
  for(var i = 0; i < hoursOperation.length; i++) {
    var cookPerTD = document.createElement('td');
    cookPerTD.textContent = this.cookiesPerHour[i];
    newRow.appendChild(cookPerTD);
  }
  var totalTD = document.createElement('td');
  totalTD.textContent = this.totalCookies;
  // console.log(totalTD);
  newRow.appendChild(totalTD);
};

for (var i = 0; i < allStore.length; i++){
  allStore[i].render();
}

makeTheFooterRow();

//Totals for the table
function makeTheFooterRow(){
  // Creats table footer
  //console.log('footer function');
  //var newFooter = document.createElement('tfoot');
  var footerRow = document.createElement('tr');
  var footerText = document.createElement('th');
  footerText.textContent = 'Total Hourly';
  footerRow.appendChild(footerText);

  var totalOfHours = 0;
  var hourlyTotals = 0;
  //Total Hourly totals
  for(var i = 0; i < hoursOperation.length; i++){
    hourlyTotals = 0;
    for(var j = 0; j < allStore.length; j++){

      hourlyTotals += allStore[j].cookiesPerHour[i];

      totalOfHours += allStore[j].cookiesPerHour[i];
    }
    footerText = document.createElement('th');
    footerText.textContent = hourlyTotals;
    footerRow.appendChild(footerText);
  }
  footerText = document.createElement('th');
  footerText.textContent = totalOfHours;
  footerRow.appendChild(footerText);


  newTable.appendChild(footerRow);
}

//display a new store that the user inputs
function handleFormSubmitted(event) {
  //console.log('form button was clicked');
  //console.log(event);
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var nameValue = nameInput.value;

  var minInput = document.getElementById('minCust');
  var minNumber = parseInt(minInput.value);

  var maxInput = document.getElementById('maxCust');
  var maxNumber = parseInt(maxInput.value);

  var avgCust = document.getElementById('avgCookiesale');
  var avgNumber = parseInt(avgCust.value);

  var newStore = new Store(nameValue, minNumber, maxNumber, avgNumber);
  newStore.this.customerPerHour = [];
  newStore.this.cookiesPerHour = [];
  newStore.this.totalCookies = 0;

  newStore.render();

  var form = document.getElementById('form');
  form.reset();
}
// handleFormSubmitted();
var formElement = document.getElementById('form');
formElement.addEventListener('submit', handleFormSubmitted);

