const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentDay = currentDate.toLocaleDateString('en-US', options);
const todaysDateElement = document.querySelector('footer p span:nth-of-type(2)');
todaysDateElement.textContent = currentDay;

const dateBar = document.querySelector('.date-bar');
const options2 = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options2);
dateBar.textContent = `Welcome, Today's Date is ${formattedDate}.`;

const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation-menu');

hamburgerMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('show');
});
