const targetDate = new Date("2025-01-01T00:00:00");

function updateCountdown() {
  const currentDate = new Date();
  const timedifference = targetDate - currentDate;

  const days = Math.floor(timedifference / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (timedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((timedifference % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((timedifference % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  setTimeout(updateCountdown, 1000);
}
console.log(updateCountdown());
