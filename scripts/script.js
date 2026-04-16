/**
 * Updates the milliseconds clock
 */
function updateTime() {
  const timeDisplay = document.querySelector('[data-testid="test-user-time"]');
  if (timeDisplay) {
    timeDisplay.textContent = Date.now();
  }
}

// Initial render
updateTime();

// Update every 1000ms for performance and accessibility (prevents screen reader overload)
setInterval(updateTime, 1000);
