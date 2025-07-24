function updateClockDate() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const date = now.toDateString();
  document.getElementById('clock-date').textContent = `${time} | ${date}`;
}

setInterval(updateClockDate, 1000);
updateClockDate(); // initial call
