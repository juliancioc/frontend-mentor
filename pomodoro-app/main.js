const startEl = document.querySelector(".time-control-pomodoro")
const btnStartPomodoroEl = document.querySelector(".start-pomodoro")
const btnStartShortBreakEl = document.querySelector(".start-short-break")
const btnStartLongBreakEl = document.querySelector(".start-long-break")
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
  minutesTextEl.innerHTML = mins;
}

function decrementTime() {
  if(mins === 0 && secondsToShow === 0) {
    secondsTextEl.innerHTM = '0';
    minutesTextEl.innerHTML = 25
  }
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

startEl.addEventListener("click", () => {
  circle.style.transition = '0.5s'
  minutesTextEl.innerHTML = mins
  seconds = 59;
  secondsToShow = 59
  setTimeout(decrementTime, 60)
})

function handleRemoveBackgroundTabs(element) {
  element.classList.remove("active")
}

btnStartPomodoroEl.addEventListener("click", () => {
  handleRemoveBackgroundTabs(btnStartShortBreakEl)
  handleRemoveBackgroundTabs(btnStartLongBreakEl)

  btnStartPomodoroEl.classList.add('active')
})

btnStartShortBreakEl.addEventListener("click", () => {
  handleRemoveBackgroundTabs(btnStartPomodoroEl)
  handleRemoveBackgroundTabs(btnStartLongBreakEl)

  btnStartShortBreakEl.classList.add("active")
})

btnStartLongBreakEl.addEventListener("click", () => {
  handleRemoveBackgroundTabs(btnStartPomodoroEl)
  handleRemoveBackgroundTabs(btnStartShortBreakEl)

  btnStartLongBreakEl.classList.add("active")
})

