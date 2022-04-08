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
let mins = 25
let timeoutId = 0

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
  if (mins === 0 && secondsToShow === 0) {
    secondsTextEl.innerHTM = '00';
    minutesTextEl.innerHTML = 25
    return
  }
  secondsTextEl.innerHTML = secondsToShow < 10 ? `0${secondsToShow}` : secondsToShow
  perc = Math.ceil(((60 - seconds) / 60) * 100)

  if (secondsToShow === 0) {
    secondsToShow = 60
    decrementMinutes()
  }

  timeoutId = window.setTimeout("decrementTime()", 1000);
  setProgress(perc)
  seconds--
  secondsToShow--
}

startEl.addEventListener("click", () => {
  const currentStatus = startEl.innerHTML

  if (currentStatus === 'PAUSE') {
    clearTimeout(timeoutId)
    startEl.innerHTML = 'START'
  } else if (currentStatus === 'START') {
    setTimeout(decrementTime, 60)

    startEl.innerHTML = 'PAUSE'
    circle.style.transition = '0.5s'
    minutesTextEl.innerHTML = mins - 1
    seconds = 59;
    secondsToShow = 59
  }
})

function handleRemoveBackgroundTabs(element) {
  element.classList.remove("active")
}

btnStartPomodoroEl.addEventListener("click", () => {
  mins = 25
  minutesTextEl.innerHTML = mins
  handleRemoveBackgroundTabs(btnStartShortBreakEl)
  handleRemoveBackgroundTabs(btnStartLongBreakEl)

  btnStartPomodoroEl.classList.add('active')
})

btnStartShortBreakEl.addEventListener("click", () => {
  mins = 5
  minutesTextEl.innerHTML = mins
  handleRemoveBackgroundTabs(btnStartPomodoroEl)
  handleRemoveBackgroundTabs(btnStartLongBreakEl)

  btnStartShortBreakEl.classList.add("active")
})

btnStartLongBreakEl.addEventListener("click", () => {
  mins = 10
  minutesTextEl.innerHTML = mins
  handleRemoveBackgroundTabs(btnStartPomodoroEl)
  handleRemoveBackgroundTabs(btnStartShortBreakEl)

  btnStartLongBreakEl.classList.add("active")
})

