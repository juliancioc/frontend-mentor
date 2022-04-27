let audioEffect = new Audio('../assets/success.mp3')

const startEl = document.querySelector(".time-control-pomodoro")
const secondsTextEl = document.querySelector(".seconds")
const minutesTextEl = document.querySelector(".minutes")

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let perc, initial, totalSecs, minsTotal;
let mins = 25
let seconds = 59

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

function decrementTime() {
  console.log(seconds)
  if (mins === 0 && seconds === 0) {
    audioEffect.play()
    secondsTextEl.innerHTML = '00'
    minutesTextEl.innerHTML = 25
    startEl.innerHTML = 'START'
  } else {
    perc = Math.ceil(((minsTotal - mins) / minsTotal) * 100)

    setProgress(perc)
    seconds--

    if (seconds === 0) {
      seconds = 59
      mins--
      minutesTextEl.innerHTML = mins;
    }

    window.setTimeout("decrementTime()", 1000);
    secondsTextEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds
  }
}

function startPomodoro() {
  minutesTextEl.innerHTML = 24
  mins--
  decrementTime()
}

startEl.addEventListener("click", () => {
  minsTotal = mins;
  startEl.innerHTML = ''
  setTimeout("startPomodoro()", 1000)
  circle.style.transition = '0.5s'
  minutesTextEl.innerHTML = mins
})


