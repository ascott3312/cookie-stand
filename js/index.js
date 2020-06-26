//display a new store that the user inputs
function handleFormSubmitted(event) {
//console.log('form button was clicked');
//console.log(event);
  event.preventDefault();

  var nameInput = document.getElementById('name');
  var nameValue = nameInput('value');

  var minInput = document.getElementById('minCust');
  var minNumber = minInput.value;

  var maxInput = document.getElementById('maxCust');
  var maxNumber = maxInput.value;

  var avgCust = document.getElementById('avgCookiesale');
  var avgNumber = avgCust.value;

  var newStore = new Store(nameValue, minNumber, maxNumber, avgNumber);

  var form = document.getElementById(newStore);
  form.reset();
}

var formElement = document.getElementById('newStore');
formElement.addEventListener('submit', handleFormSubmitted);