const btnStartPomodoroEl = document.querySelector(".start-pomodoro")

const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

let mins, perc, initial, totalSecs, seconds;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

function decrementTime() {
    if (circle.classList.contains("danger")) {
      circle.classList.remove("danger");
    }
  
    if (seconds > 0) {
      perc = Math.ceil(((totalSecs - seconds) / totalSecs) * 100);
      setProgress(perc);
      seconds--;
      initial = window.setTimeout("decrementTime()", 1000);
      if (seconds < 10) {
        circle.classList.add("danger");
      }
    } else {
      mins = 0;
      seconds = 0;
      bell.play();
      let btn = localStorage.getItem("btn");
  
      if (btn === "focus") {
        startBtn.textContent = "start break";
        startBtn.classList.add("break");
        localStorage.setItem("btn", "break");
      } else {
        startBtn.classList.remove("break");
        startBtn.textContent = "start focus";
        localStorage.setItem("btn", "focus");
      }
      startBtn.style.transform = "scale(1)";
    }
}

btnStartPomodoroEl.addEventListener("click", () => {
    seconds = 1 * 60;
    totalSecs = 1 * 60;
    setTimeout(decrementTime, 60)
})