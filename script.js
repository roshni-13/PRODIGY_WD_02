
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const tensElement = document.getElementById("tens");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;
function startStopwatch() {
  interval = setInterval(updateStopwatch, 10);
}
function updateStopwatch() {
  tens++;
 if (tens > 99) {
    seconds++;
    tens = 0;
  }
 if (seconds > 59) {
    minutes++;
    seconds = 0;
  }
minutesElement.textContent = padNumber(minutes);
  secondsElement.textContent = padNumber(seconds);
  tensElement.textContent = padNumber(tens);
}
function stopStopwatch() {
  clearInterval(interval);
}
function resetStopwatch() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  tens = 0;
minutesElement.textContent = "00";
  secondsElement.textContent = "00";
  tensElement.textContent = "00";
}
function padNumber(number) {
  return number < 10 ? "0" + number : number;
}
startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);



  