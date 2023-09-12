// script.js
document.addEventListener('DOMContentLoaded', function () {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    // Current UTC time
    const currentUTCTime = new Date().toISOString();

    // Elements with the current data
    currentDayElement.textContent = currentDay;
    currentUTCTimeElement.textContent = currentUTCTime;
});
