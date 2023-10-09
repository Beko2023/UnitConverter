//Interacting with DOM
let inputEl = document.getElementById("inputEl");
let lengthEl = document.getElementById("lengthEl");
let volumeEl = document.getElementById("volumeEl");
let massEl = document.getElementById("massEl");

//Button Function
function convertValue() {
  number = inputEl.value;
  meterToFeet = (number * 3.281).toFixed(3);
  feetToMeters = (number / 3.281).toFixed(3);
  litersToGallons = (number / 3.785).toFixed(3);
  gallonsToLiters = (number * 3.785).toFixed(3);
  kilogramsToPounds = (number / 2.205).toFixed(3);
  poundsToKilograms = (number * 2.205).toFixed(3);

  lengthEl.textContent = `${number} meters = ${meterToFeet} feet | ${number} feet = ${feetToMeters} meters`;
  volumeEl.textContent = `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters`;
  massEl.textContent = `${number} kilos = ${kilogramsToPounds} pounds | ${number} pounds = ${poundsToKilograms} kilos`;
}
