// Add the 'animation' class to the text element on page load
window.addEventListener('DOMContentLoaded', function() {
    var textElement = document.querySelector('.number');
    textElement.classList.add('animation');
  });

  // Toggle dark theme on click
  document.addEventListener('click', function() {
    var bodyElement = document.querySelector('body');
    bodyElement.classList.toggle('dark-theme');
  });
