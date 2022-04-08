const btnStartPomodoroEl = document.querySelector(".start-pomodoro")
const secondsTextEl = document.querySelector(".seconds")
const minutesTextEl = document.querySelector(".minutes")

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let perc, initial, totalSecs, seconds, secondsToShow;
let mins = 24

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

function decrementMinutes() {
  mins--
  minutesTextEl.innerHTML = mins
}

function decrementTime() {
  secondsTextEl.innerHTML = secondsToShow < 10 ? `0${secondsToShow}` : secondsToShow
  perc = Math.ceil(((60 - seconds) / 60) * 100)

  if (secondsToShow === 0) {
    secondsToShow = 60
    decrementMinutes()
  }

  window.setTimeout("decrementTime()", 1000);
  setProgress(perc)
  seconds--
  secondsToShow--
}

btnStartPomodoroEl.addEventListener("click", () => {
  minutesTextEl.innerHTML = 24
  seconds = 59;
  secondsToShow = 59
  setTimeout(decrementTime, 60)
})