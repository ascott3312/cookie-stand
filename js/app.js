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
//   customerPerHour: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookiesPerHour: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.customerPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
//     }
//   },
//   totalCookies: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookiesPerHour.length; i++) {
//       this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
//     }
//   }
// };
// storeOne.calcTotal();
// var root = document.getElementById('root');
// var ul1 = document.createElement('ul');
// root.appendChild(ul1);
// for (var i = 0; i <storeOne.cookiesPerHour.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeOne.cookiesPerHour[i]} cookies`;
//   ul1.appendChild(li);
// }
// var total = document.createElement('li');
// total.textContent = `Total: ${storeOne.totalCookies}`;
// ul1.appendChild(total);

// var storeTwo = {
//   name:'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesale: 1.2,
//   customerPerHour: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookiesPerHour: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.customerPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
//     }
//   },
//   totalCookies: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookiesPerHour.length; i++) {
//       this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
//     }
//   }
// };
// storeTwo.calcTotal();
// var ul2 = document.createElement('ul');
// root.appendChild(ul2);
// for (var i = 0; i <storeTwo.cookiesPerHour.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeTwo.cookiesPerHour[i]} cookies`;
//   ul2.appendChild(li);
// }
// var total2 = document.createElement('li');
// total2.textContent = `Total2: ${storeTwo.totalCookies}`;
// ul2.appendChild(total2);


// var storeThree= {
//   name:'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesale: 3.7,
//   customerPerHour: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookiesPerHour: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.customerPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
//     }
//   },
//   totalCookies: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookiesPerHour.length; i++) {
//       this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
//     }
//   }
// };
// storeThree.calcTotal();
// var ul3 = document.createElement('ul');
// root.appendChild(ul3);
// for (var i = 0; i <storeThree.cookiesPerHour.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeThree.cookiesPerHour[i]} cookies`;
//   ul3.appendChild(li);
// }
// var total3 = document.createElement('li');
// total3.textContent = `Total3: ${storeThree.totalCookies}`;
// ul3.appendChild(total3);

// var storeFour= {
//   name:'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesale: 2.3,
//   customerPerHour: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookiesPerHour: [],
//   cookiesPerHr: function() {
//     this.custPerHr();
//     for (var i = 0; i <this.customerPerHour.length; i++) {
//       this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
//     }
//   },
//   totalCookies: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookiesPerHour.length; i++) {
//       this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
//     }
//   }
// };
// storeFour.calcTotal();
// var ul4 = document.createElement('ul');
// root.appendChild(ul4);
// for (var i = 0; i <storeFour.cookiesPerHour.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeFour.cookiesPerHour[i]} cookies`;
//   ul4.appendChild(li);
// }
// var total4 = document.createElement('li');
// total4.textContent = `Total4: ${storeFour.totalCookies}`;
// ul4.appendChild(total4);

// var storeFive= {
//   name:'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesale: 4.6,
//   customerPerHour: [],
//   custPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
//     }
//   },
//   cookiesPerHour: [],
//   ccustPerHr: function() {
//     for (var i = 0; i <hoursOperation.length; i++) {
//       this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
//     } }
//   },
//   totalCookies: 0,
//   calcTotal: function() {
//     this.cookiesPerHr();
//     for (var i = 0; i <this.cookiesPerHour.length; i++) {
//       this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
//     }
//   }
// };
// console.log (storeOne, storeTwo, storeThree, storeFour, storeFive);
// storeFive.calcTotal();
// console.log(storeOne.totalCookies,storeTwo.totalCookies, storeThree.totalCookies, storeFour.totalCookies, storeFive.totalCookies);

// var ul5 = document.createElement('ul');
// root.appendChild(ul5);
// for (var i = 0; i <storeFive.cookiesPerHour.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${hoursOperation[i]} ${storeFive.cookiesPerHour[i]} cookies`;
//   ul5.appendChild(li);
// }
// var total5 = document.createElement('li');
// total5.textContent = `Total5: ${storeFive.totalCookies}`;
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
Salmon.prototype.ccustPerHr = function() {
  for (var i = 0; i <hoursOperation.length; i++) {
    this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
  }
};
Salmon.calcTotal = function() {
  this.cookiesPerHr();
  for (var i = 0; i <this.cookiesPerHour.length; i++) {
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
  }
};
//To rendor the table

// var tableRow = document.createElement('tr');
// var tableData = document.createElement('td');
//Create Table Header
Salmon.prototype.render = function() {
  var fullTable = document.getElementById('salmonTable');
  var newTableHead = document.createElement('thead');
  fullTable.appendChild (newTableHead);
  // Create table row
  // var tableHead = document.createElement('tr');
  var newRow = document.createElement('tr');
  fullTable.appendChild(newRow);
  for(var i = 0; i < allStore.length;i++);
  newRow.textContent = allStore [i];
  newRow.appendChild('tr');

  // Creats table footer
  var newFooter = document.createElement('tfoot');
  fullTable.appendChild(newFooter);
  //Create table data
  var customerPerHour = document.createElement('td');
  for(var i = 0; i < hoursOperation.length; i++); {
    customerPerHour.textContent = customerPerHour[i];
    newRow.appendChild('td');
  }
  var cookiesPerHour = document.createElement('td');
  for(var i = 0; i < hoursOperation.length; i++); {
    cookiesPerHour.textContent = cookiesPerHour[i];
    newRow.appendChild('td');
  }
  var totalCookies = document.createElement('td');
  for(var i = 0; i < hoursOperation.length; i++) {
    td.textContent = totalCookies[i];
    newRow.appendChild('td');
  }
  fullTable.appendChild('salmonTable');

  //To create instance use the new to call constructor function

  var storeOne = new Salmon('Seattle',23,65,6.3);
  var storeTwo = new Salmon('Tokyo', 3, 24, 1.2);
  var storeThree = new Salmon('Dubai', 11, 38, 3.7);
  var storeFour = new Salmon('Paris',20,38,2.3);
  var storeFive = new Salmon('SLima',2,16,4.6);

  var allStore = [storeOne, storeTwo, storeThree, storeFour, storeFive];

  for (var i = 0; i < allStore.length; i++);{
    allStore[i].render();
  }
};