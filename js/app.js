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
console.log (storeOne);

storeOne.calcTotal();
console.log(storeOne.totalCookies);

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
