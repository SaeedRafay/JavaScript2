/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

const sessionIncrement = document.getElementById("increase"); // Increase session length button
const sessionDecrement = document.getElementById("decrease"); // Decrease session length button
const sessionLength = document.getElementById("length"); // Session length text
const clock = document.getElementById("clock"); // Clock text
const clockStartStop = document.getElementById("start"); // Start/Stop button
const clockPause = document.getElementById("pause"); // Pause/Unpause button
let intervalCountDown; // Global variable for SetInterval and ClearInterval functions for the clock
let timerRunning = false; // Set the clock running status to false
let timerPaused = false; // Set the clock paused status to false

// When the session length is increased
sessionIncrement.addEventListener("click", function(event) {
  event.preventDefault();
  if(!timerRunning) { // if the clock is not already started
    const sessionLengthToNumber = parseFloat(sessionLength.textContent);
    sessionLength.textContent = sessionLengthToNumber + 1;
    clock.textContent = sessionLength.textContent + ":00";
  }
});

// When the session length is decreased
sessionDecrement.addEventListener("click", function(event) {
  event.preventDefault();
  if(!timerRunning) { // if the clock is not already started
    const sessionLengthToNumber = parseFloat(sessionLength.textContent);
    sessionLength.textContent = (sessionLengthToNumber <= 1) ? 1 : sessionLengthToNumber - 1;
    clock.textContent = sessionLength.textContent + ":00";
  }
});

// This function is called from the clock SetInterval functions
function timerCountDown() {
  if (clock.textContent === "Time's up!") { // If the clock restarts after a round
    clock.textContent = sessionLength.textContent + ":00";
  }

  // Convert minutes and seconds strings to numbers
  let minutes = parseInt(clock.textContent.split(":")[0]);
  let seconds = parseInt(clock.textContent.split(":")[1]);

  // If the seconds reach zero, minus 1 from minutes and reset seconds to 60
  if(seconds === 0) {
    minutes--;
    seconds = 60;
  }

  // Minus one second and write minutes and seconds to the clock
  seconds--;
  clock.textContent = minutes + ":" + seconds;

  // If the time is up
  if(minutes <= 0 && seconds <= 0) {
    clock.textContent = "Time's up!";
    clockStartStop.innerHTML = "<i class=\"fas fa-play\"></i>";
    timerRunning = false;
    clearInterval(intervalCountDown);
  }
}

// When the start / stop button is clicked
clockStartStop.addEventListener("click", function(event) {
  event.preventDefault();
  if(!timerRunning) { // To start the clock
    this.innerHTML = "<i class=\"fas fa-stop\"></i>";
    timerRunning = true;
    intervalCountDown = setInterval(timerCountDown, 1000);
  } else { // To stop the clock
    clock.textContent = sessionLength.textContent + ":00";
    clockPause.style.opacity = "0.5";
    this.innerHTML = "<i class=\"fas fa-play\"></i>";
    timerRunning = false;
    timerPaused = false;
    clearInterval(intervalCountDown);
  }
});

// When the pause / unpause button is clicked
clockPause.addEventListener("click", function(event) {
  event.preventDefault();
  if(timerRunning && !timerPaused) { // To pause the clock
    this.style.opacity = "1";
    timerPaused = true;
    clearInterval(intervalCountDown);
  } else if(timerRunning && timerPaused) { // To unpause the clock
    this.style.opacity = "0.5";
    timerPaused = false;
    intervalCountDown = setInterval(timerCountDown, 1000);
  }
});

// Set the clock to whatever is the default session length when the page load
clock.textContent = sessionLength.textContent + ":00";
