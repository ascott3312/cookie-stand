/* eslint-disable no-redeclare */
'use strict';
console.log('app.js is connected.');

// var hoursOperation = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
// function randomCustperhr(min,max) {
//   return Math.floor(Math.random() * (max - min + 1 ) + min);
// }

// var storeOne = {
//   name:'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesale: 6.3,
//   custPerTD: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.custPerTD.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookPerTD: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.custPerTD.length; i++) {
//       this.cookPerTD.push(Math.floor(this.custPerTD[i]*this.avgCookiesale));
//     }
//   },
//   totalTD: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookPerTD.length; i++) {
//       this.totalTD = this.totalTD + this.cookPerTD[i];
//     }
//   }
// };
// storeOne.calcTotal();
// var root = document.getElementById('root');
// var ul1 = document.createElement('ul');
// root.appendChild(ul1);
// for (var i = 0; i <storeOne.cookPerTD.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeOne.cookPerTD[i]} cookies`;
//   ul1.appendChild(li);
// }
// var total = document.createElement('li');
// total.textContent = `Total: ${storeOne.totalTD}`;
// ul1.appendChild(total);

// var storeTwo = {
//   name:'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesale: 1.2,
//   custPerTD: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.custPerTD.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookPerTD: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.custPerTD.length; i++) {
//       this.cookPerTD.push(Math.floor(this.custPerTD[i]*this.avgCookiesale));
//     }
//   },
//   totalTD: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookPerTD.length; i++) {
//       this.totalTD = this.totalTD + this.cookPerTD[i];
//     }
//   }
// };
// storeTwo.calcTotal();
// var ul2 = document.createElement('ul');
// root.appendChild(ul2);
// for (var i = 0; i <storeTwo.cookPerTD.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeTwo.cookPerTD[i]} cookies`;
//   ul2.appendChild(li);
// }
// var total2 = document.createElement('li');
// total2.textContent = `Total2: ${storeTwo.totalTD}`;
// ul2.appendChild(total2);


// var storeThree= {
//   name:'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesale: 3.7,
//   custPerTD: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.custPerTD.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookPerTD: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.custPerTD.length; i++) {
//       this.cookPerTD.push(Math.floor(this.custPerTD[i]*this.avgCookiesale));
//     }
//   },
//   totalTD: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookPerTD.length; i++) {
//       this.totalTD = this.totalTD + this.cookPerTD[i];
//     }
//   }
// };
// storeThree.calcTotal();
// var ul3 = document.createElement('ul');
// root.appendChild(ul3);
// for (var i = 0; i <storeThree.cookPerTD.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeThree.cookPerTD[i]} cookies`;
//   ul3.appendChild(li);
// }
// var total3 = document.createElement('li');
// total3.textContent = `Total3: ${storeThree.totalTD}`;
// ul3.appendChild(total3);

// var storeFour= {
//   name:'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesale: 2.3,
//   custPerTD: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.custPerTD.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookPerTD: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.custPerTD.length; i++) {
//       this.cookPerTD.push(Math.floor(this.custPerTD[i]*this.avgCookiesale));
//     }
//   },
//   totalTD: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookPerTD.length; i++) {
//       this.totalTD = this.totalTD + this.cookPerTD[i];
//     }
//   }
// };
// storeFour.calcTotal();
// var ul4 = document.createElement('ul');
// root.appendChild(ul4);
// for (var i = 0; i <storeFour.cookPerTD.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeFour.cookPerTD[i]} cookies`;
//   ul4.appendChild(li);
// }
// var total4 = document.createElement('li');
// total4.textContent = `Total4: ${storeFour.totalTD}`;
// ul4.appendChild(total4);

// var storeFive= {
//   name:'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesale: 4.6,
//   custPerTD: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.custPerTD.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookPerTD: [],
//   ccustPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.custPerTD.push(randomCustperhr(this.minCust, this.maxCust));
//     } }
//   },
//   totalTD: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookPerTD.length; i++) {
//       this.totalTD = this.totalTD + this.cookPerTD[i];
//     }
//   }
// };
// console.log (storeOne, storeTwo, storeThree, storeFour, storeFive);
// storeFive.calcTotal();
// console.log(storeOne.totalTD,storeTwo.totalTD, storeThree.totalTD, storeFour.totalTD, storeFive.totalTD);

// var ul5 = document.createElement('ul');
// root.appendChild(ul5);
// for (var i = 0; i <storeFive.cookPerTD.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeFive.cookPerTD[i]} cookies`;
//   ul5.appendChild(li);
// }
// var total5 = document.createElement('li');
// total5.textContent = `Total5: ${storeFive.totalTD}`;
// ul5.appendChild(total5);




//Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.
//Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.
//Replace the lists of your data for each store and build a single table of data instead. It shoudl look similar to the following:
//Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.


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