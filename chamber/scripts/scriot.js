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

// Add event listener for hamburger menu click
hamburgerMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('show');
});

// Add event listener for window resizing
window.addEventListener('resize', () => {
  // Get viewport width
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  // Check if viewport is mobile or tablet size
  if (viewportWidth < 768) {
    // Adjust CSS styles for mobile and tablet viewports
    navigationMenu.style.display = 'none';
    hamburgerMenu.style.display = 'block';
  } else {
    // Reset CSS styles for larger viewports
    navigationMenu.style.display = 'flex';
    hamburgerMenu.style.display = 'none';
  }
});

// Set initial CSS styles based on viewport size
const initialViewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (initialViewportWidth < 768) {
  navigationMenu.style.display = 'none';
  hamburgerMenu.style.display = 'block';
} else {
  navigationMenu.style.display = 'flex';
  hamburgerMenu.style.display = 'none';
}
