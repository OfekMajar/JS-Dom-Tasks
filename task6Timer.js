var userMin,
  currentTime,
  userHour,
  timerStarted = 0;
var currentSec;
function task6() {
  inputCont.innerHTML += `
<label for="hours">Hours:</label>
<input type="number" id="hours" placeholder="Hours:">
<label for="minutes">minutes</label>
<input type="number" id="minutes" placeholder="minutes">
<button id="sendBtn" onclick="sendTime()"> send </button>
<button id="clearBtn" onclick="refreshSite()"> clear </button>`;
}
function sendTime() {
  currentTime = new Date();
  userMin = document.getElementById("minutes").value;
  userHour = document.getElementById("hours").value;
  currentSec = currentTime.getSeconds();
  var currentHourBigger = userHour < currentTime.getHours();
  var tempHours1 = 24 - (currentTime.getHours() - userHour);
  var tempMinutes1;
  if (userMin < currentTime.getMinutes()) {
    tempMinutes1 = 60 - (currentTime.getMinutes() - userMin);
  } else {
    tempMinutes1 = userMin - currentTime.getMinutes();
  }

  var nextHourIsOne =
    userHour - currentTime.getHours() == 1 &&
    userMin < currentTime.getMinutes();
  currentSec = currentTime.getSeconds();
  if (userHour - currentTime.getHours() == 0) {
    if (userMin < currentTime.getMinutes()) {
      document.getElementById("hoursClock").innerText = 23;
      document.getElementById("minutesClock").innerText =
        60 - (currentTime.getMinutes() - userMin) ;
    } else {
      document.getElementById("hoursClock").innerText = `00`;
      document.getElementById("minutesClock").innerText =
        userMin - currentTime.getMinutes() ;
    }
  } else {
    if (!nextHourIsOne) {
      if (currentHourBigger) {
        document.getElementById("hoursClock").innerText = tempHours1;
        document.getElementById("minutesClock").innerText = tempMinutes1 ;
      } else {
        document.getElementById("hoursClock").innerText =
          userHour - currentTime.getHours();
        document.getElementById("minutesClock").innerText = tempMinutes1 ;
      }
    } else {
      document.getElementById("hoursClock").innerText = `00`;
      document.getElementById("minutesClock").innerText = tempMinutes1 ;
    }
  }

}
// console.log(currentSec);
function startOrStop() {
  timerStarted++;
  if (timerStarted % 2 == 1) {
    startTimer();
  } else {
    stopTimer();
  }
}
function startTimer() {
  secondsItervalId = setInterval(secondCounterFunc, 1000);
}
var secondsCounter;

function secondCounterFunc() {
  var tempTime = new Date();
  secondsCounter = 60 - tempTime.getSeconds();
  // console.log(tempTime.getSeconds());
  // console.log(secondsCounter);
  if (
    (secondsClock.innerText <= 0 &&
      document.getElementById("minutesClock").innerText > 0) ||
    (secondsClock.innerText <= 0 && userHour > 0)
  ) {
   
    minuteCounterFunc();
  }

  secondsClock.innerText = --secondsCounter;
  if (
    secondsClock.innerText == 0 &&
    minutesClock.innerText == 0 &&
    hoursClock.innerText == 0
  ) {
    timesUpStoper();
  }
  console.log(tempTime);
}
function minuteCounterFunc() {
  var tempMinutes = +minutesClock.innerText;
  var minNotDoubleDigit = tempMinutes < 10;
  minutesClock.innerText = `${
    minNotDoubleDigit ? `0${--tempMinutes}` : --tempMinutes
  }`;
  if (minutesClock.innerText <= 0 && hoursClock.innerText > 0) {
    minutesClock.innerText = 59;
    hourCounterFunc();
  }
}
function hourCounterFunc() {
  var tempHours = +hoursClock.innerText;
  var hourNotDoubleDigit = tempHours < 10;
  hoursClock.innerText = `${
    hourNotDoubleDigit ? `0${--tempHours}` : --tempHours
  }`;
}
function stopTimer() {
  clearInterval(secondsItervalId);
}
function timesUpStoper() {
  alert("TimesUp");
  window.history.go();
}
function refreshSite() {
  window.history.go();
}
task6();
