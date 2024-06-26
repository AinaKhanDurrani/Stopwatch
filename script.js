const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("pause");
const resetButtonEl = document.getElementById("reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
}

function formatTime(time) {
    let date = new Date(time);
    let hours = String(date.getUTCHours()).padStart(2, '0');
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0').slice(0, 2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

  
function stopTimer() {
  clearInterval(timerInterval);
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timerEl.textContent = "00:00:00";

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
}

startButtonEl.addEventListener("click", startTimer);
stopButtonEl.addEventListener("click", stopTimer);
resetButtonEl.addEventListener("click", resetTimer);


// function formatTime(elapsedTime) {
//     const milliseconds = Math.floor((elapsedTime % 1000) / 10);
//     const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//     const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//     const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     return (
//       (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
//       ":" +
//       (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
//       ":" +
//       (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
//       "." +
//       (milliseconds > 9 ? milliseconds : "0" + milliseconds)
//     );
//   }