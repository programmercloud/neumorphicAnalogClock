// Selecting the HTML element with class "second-hand"
// and assigning it to the variable secondHand
const secondHand = document.querySelector(".second-hand");

// Selecting the HTML element with class "min-hand" and assigning it to the variable minsHand
const minsHand = document.querySelector(".min-hand");

// Selecting the HTML element with class "hour-hand" and assigning it to the variable hourHand
const hourHand = document.querySelector(".hour-hand");

// Creating a function named setDate
function setDate() {
  // Creating a new date object
  const now = new Date();

  // Getting the current seconds from the date object
  const seconds = now.getSeconds();

  // Calculating the degrees to rotate the second hand based on the current seconds
  const secondsDegrees = (seconds / 60) * 360 + 90;

  // Rotating the second hand using CSS transform property
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Getting the current minutes from the date object
  const mins = now.getMinutes();

  // Calculating the degrees to rotate the minute hand based on the current minutes and seconds
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

  // Rotating the minute hand using CSS transform property
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // Getting the current hours from the date object
  const hour = now.getHours();

  // Calculating the degrees to rotate the hour hand based on the current hours, minutes, and seconds
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

  // Rotating the hour hand using CSS transform property
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Calling the setDate function every second using setInterval method
setInterval(setDate, 1000);

// Calling the setDate function to update the clock immediately when the page is loaded
setDate();
