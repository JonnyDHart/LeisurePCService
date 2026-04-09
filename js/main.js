// Leisure PC Service — main.js

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Set min date on date pickers to today
const dateInputs = document.querySelectorAll('input[type="date"]');
dateInputs.forEach(input => {
  const today = new Date().toISOString().split('T')[0];
  input.setAttribute('min', today);
});

// Smooth fade-in on page load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
