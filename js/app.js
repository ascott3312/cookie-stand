/* eslint-disable no-redeclare */
'use strict';
console.log('app.js is connected.');

var hoursOperation = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
function randomCustperhr(min,max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}

var storeOne = {
  name:'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesale: 6.3,
  customerPerHour: [],
  custPerHr: function() {
    for (var i = 0; i <hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
    }
  },
  cookiesPerHour: [],
  cookiesPerHr: function() {
    this.custPerHr();
    for (var i = 0; i <this.customerPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
    }
  },
  totalCookies: 0,
  calcTotal: function() {
    this.cookiesPerHr();
    for (var i = 0; i <this.cookiesPerHour.length; i++) {
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
  }
};
var root = document.getElementById('root');
var ul1 = document.createElement('ul');
root.appendChild(ul1);
for (var i = 0; i <storeOne.cookiesPerHour.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hoursOperation[i]} ${storeOne.cookiesPerHour[i]} cookies`;
  ul1.appendChild(li);
}
var total = document.createElement('li');
total.textContent = `Total: ${storeOne.totalCookies}`;
ul1.appendChild(total);

var storeTwo = {
  name:'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesale: 1.2,
  customerPerHour: [],
  custPerHr: function() {
    for (var i = 0; i <hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
    }
  },
  cookiesPerHour: [],
  cookiesPerHr: function() {
    this.custPerHr();
    for (var i = 0; i <this.customerPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
    }
  },
  totalCookies: 0,
  calcTotal: function() {
    this.cookiesPerHr();
    for (var i = 0; i <this.cookiesPerHour.length; i++) {
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
  }
};
var ul2 = document.createElement('ul');
root.appendChild(ul2);
for (var i = 0; i <storeTwo.cookiesPerHour.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hoursOperation[i]} ${storeTwo.cookiesPerHour[i]} cookies`;
  ul2.appendChild(li);
}
var total2 = document.createElement('li');
total2.textContent = `Total: ${storeTwo.totalCookies}`;
ul1.appendChild(total2);


var storeThree= {
  name:'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesale: 3.7,
  customerPerHour: [],
  custPerHr: function() {
    for (var i = 0; i <hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
    }
  },
  cookiesPerHour: [],
  cookiesPerHr: function() {
    this.custPerHr();
    for (var i = 0; i <this.customerPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
    }
  },
  totalCookies: 0,
  calcTotal: function() {
    this.cookiesPerHr();
    for (var i = 0; i <this.cookiesPerHour.length; i++) {
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
  }
};
var ul3 = document.createElement('ul');
root.appendChild(ul3);
for (var i = 0; i <storeThree.cookiesPerHour.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hoursOperation[i]} ${storeThree.cookiesPerHour[i]} cookies`;
  ul3.appendChild(li);
}
var total3 = document.createElement('li');
total3.textContent = `Total: ${storeThree.totalCookies}`;
ul1.appendChild(total3);

var storeFour= {
  name:'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesale: 2.3,
  customerPerHour: [],
  custPerHr: function() {
    for (var i = 0; i <hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
    }
  },
  cookiesPerHour: [],
  cookiesPerHr: function() {
    this.custPerHr();
    for (var i = 0; i <this.customerPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
    }
  },
  totalCookies: 0,
  calcTotal: function() {
    this.cookiesPerHr();
    for (var i = 0; i <this.cookiesPerHour.length; i++) {
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
  }
};
var ul4 = document.createElement('ul');
root.appendChild(ul4);
for (var i = 0; i <storeFour.cookiesPerHour.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hoursOperation[i]} ${storeFour.cookiesPerHour[i]} cookies`;
  ul4.appendChild(li);
}
var total4 = document.createElement('li');
total4.textContent = `Total: ${storeFour.totalCookies}`;
ul1.appendChild(total4);

var storeFive= {
  name:'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesale: 4.6,
  customerPerHour: [],
  custPerHr: function() {
    for (var i = 0; i <hoursOperation.length; i++) {
      this.customerPerHour.push(randomCustperhr(this.minCust, this.maxCust));
    }
  },
  cookiesPerHour: [],
  cookiesPerHr: function() {
    this.custPerHr();
    for (var i = 0; i <this.customerPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i]*this.avgCookiesale));
    }
  },
  totalCookies: 0,
  calcTotal: function() {
    this.cookiesPerHr();
    for (var i = 0; i <this.cookiesPerHour.length; i++) {
      this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
    }
  }
};
console.log (storeOne, storeTwo, storeThree, storeFour, storeFive);

storeOne.calcTotal();
storeTwo.calcTotal();
storeThree.calcTotal();
storeFour.calcTotal();
storeFive.calcTotal();
console.log(storeOne.totalCookies,storeTwo.totalCookies, storeThree.totalCookies, storeFour.totalCookies, storeFive.totalCookies);

var ul5 = document.createElement('ul');
root.appendChild(ul5);
for (var i = 0; i <storeFive.cookiesPerHour.length; i++) {
  var li = document.createElement('li');
  li.textContent = `${hoursOperation[i]} ${storeFive.cookiesPerHour[i]} cookies`;
  ul5.appendChild(li);
}
var total5 = document.createElement('li');
total5.textContent = `Total: ${storeFive.totalCookies}`;
ul5.appendChild(total5);















