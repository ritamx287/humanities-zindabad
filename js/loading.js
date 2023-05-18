window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const countdown = document.getElementById('countdown');

    let secondsLeft = 2;

    const updateCountdown = () => {
      countdown.textContent = `Opening the website in ${secondsLeft} second${secondsLeft > 1 ? 's' : ''}`;
      secondsLeft--;
    };

    updateCountdown();

    const countdownInterval = setInterval(() => {
      if (secondsLeft >= 0) {
        updateCountdown();
      } else {
        clearInterval(countdownInterval);
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
      }
    }, 1000);
  });
