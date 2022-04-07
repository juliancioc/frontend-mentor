const btnStartPomodoroEl = document.querySelector(".start-pomodoro")
const secondsTextEl = document.querySelector(".seconds")

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let mins, perc, initial, totalSecs, seconds, secondsToShow;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

function decrementTime() {
  secondsToShow--
  if (secondsToShow === 0) {
    secondsToShow = 60
  }
  secondsTextEl.innerHTML = secondsToShow < 10 ? `0${secondsToShow}` : secondsToShow
  perc = Math.ceil(((60 - seconds) / 60) * 100);
  setProgress(perc);
  seconds--;
  window.setTimeout("decrementTime()", 1000);
}

btnStartPomodoroEl.addEventListener("click", () => {
  seconds = 60;
  secondsToShow = 60
  setTimeout(decrementTime, 60)
})