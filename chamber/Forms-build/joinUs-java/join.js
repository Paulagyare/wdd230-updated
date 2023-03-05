const currentDate = new Date();
const currentDateTimeString = currentDate.toISOString();
const formLoadDateInput = document.getElementById('form-load-date');
formLoadDateInput.value = currentDateTimeString;

const currentDateString = currentDate.toLocaleDateString();
const currentDateElement = document.getElementById('current-date');
currentDateElement.textContent = currentDateString;
