let audioEffect = new Audio('../pomodoro-app/assets/success.mp3')

const startEl = document.querySelector(".time-control-pomodoro")
const btnSelectPomodoroEl = document.querySelector(".select-pomodoro")
const btnSelectShortBreakEl = document.querySelector(".select-short-break")
const btnSelectLongBreakEl = document.querySelector(".select-long-break")
const secondsTextEl = document.querySelector(".seconds")
const minutesTextEl = document.querySelector(".minutes")

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let perc, initial, totalSecs, seconds, secondsToShow, minsTotal;
let mins = 24
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
    audioEffect.play()
    secondsTextEl.innerHTML = '00'
    minutesTextEl.innerHTML = 25
  } else {
    secondsTextEl.innerHTML = secondsToShow < 10 ? `0${secondsToShow}` : secondsToShow
    perc = Math.ceil(((minsTotal - mins) / minsTotal) * 100)

    if (secondsToShow === 0) {
      secondsToShow = 60
      decrementMinutes()
    }

    timeoutId = window.setTimeout("decrementTime()", 1000);
    setProgress(perc)
    seconds--
    secondsToShow--
  }
}

startEl.addEventListener("click", () => {
  const currentStatus = startEl.innerHTML
  minsTotal = mins;

  if (currentStatus === 'PAUSE') {
    clearTimeout(timeoutId)
    startEl.innerHTML = 'CONTINUE'
  } else if (currentStatus === 'START') {
    setTimeout(decrementTime, 60)

    startEl.innerHTML = 'PAUSE'
    circle.style.transition = '0.5s'
    minutesTextEl.innerHTML = mins

    seconds = 59;
    secondsToShow = 59
  } else if (currentStatus === 'CONTINUE') {
    setTimeout(decrementTime, seconds)
    startEl.innerHTML = 'PAUSE'
  }
})

function handleRemoveBackgroundTabs(element) {
  element.classList.remove("active")
}

btnSelectPomodoroEl.addEventListener("click", () => {
  mins = 25
  minutesTextEl.innerHTML = mins
  handleRemoveBackgroundTabs(btnSelectShortBreakEl)
  handleRemoveBackgroundTabs(btnSelectLongBreakEl)

  btnSelectPomodoroEl.classList.add('active')
})

btnSelectShortBreakEl.addEventListener("click", () => {
  mins = 5
  minutesTextEl.innerHTML = mins
  handleRemoveBackgroundTabs(btnSelectPomodoroEl)
  handleRemoveBackgroundTabs(btnSelectLongBreakEl)

  btnSelectShortBreakEl.classList.add("active")
})

btnSelectLongBreakEl.addEventListener("click", () => {
  mins = 10
  minutesTextEl.innerHTML = mins
  handleRemoveBackgroundTabs(btnSelectPomodoroEl)
  handleRemoveBackgroundTabs(btnSelectShortBreakEl)

  btnSelectLongBreakEl.classList.add("active")
})

