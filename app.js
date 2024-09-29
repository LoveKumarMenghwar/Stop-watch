var secondDisplay = document.getElementById("second-display");
var minuteDisplay = document.getElementById("minute-display");
var hourDisplay = document.getElementById("hour-display");
var timer;

function initiate() {
  timer = setInterval(function () {
    secondDisplay.innerHTML++;
    if (secondDisplay.innerHTML == 60) {
      secondDisplay.innerHTML = "00";
      minuteDisplay.innerHTML++;
    }

    if (minuteDisplay.innerHTML == 60) {
      minuteDisplay.innerHTML = "00";
      hourDisplay.innerHTML++;
    }

  }, 1000);
}

function pause() {
  clearInterval(timer);
}

function initialize() {
    secondDisplay.innerHTML = "00";
    minuteDisplay.innerHTML = "00";
    hourDisplay.innerHTML = "00";
    clearInterval(timer);
}
