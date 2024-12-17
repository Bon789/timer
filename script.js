function updateCountdown() {
  const now = new Date();
  const eventDate = new Date('Jan 1 2025, 00:00:00');
  const currentTime = now.getTime();
  let remainingTime = eventDate.getTime() - currentTime;

  if (remainingTime < 0) {
      remainingTime = 0;
  }

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
  const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  
}

setInterval(updateCountdown, 1000);
