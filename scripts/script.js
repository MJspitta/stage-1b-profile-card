
function updateTime() {
  const timeDisplay = document.querySelector('[data-testid="test-user-time"]');
  if (timeDisplay) {
    timeDisplay.textContent = Date.now();
  }
}

updateTime();

setInterval(updateTime, 1000);
