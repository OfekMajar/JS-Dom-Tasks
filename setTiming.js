mainContainer = document.getElementById("mainContainer");
var minute = 60,
  myHour = minute * 60,
  day = myHour * 24;
// function task1() {
//   setTimeout(function () {
//     mainContainer.innerHTML += "ofek";
//   }, 7000);
// }
// function task2() {
//   function printHello() {
//     mainContainer.innerHTML = "hello";
//   }
//   setTimeout(printHello, 5000);
//   mainContainer.innerHTML = "bye";
// }
// task2()
// function task3() {
//   var timeNow = new Date();
//   setTimeout(function () {
//     mainContainer.innerHTML += `<p> ${timeNow.toTimeString()}</p>`;
//   }, 1000 * minute * 1.5);
//   console.log(timeNow.toTimeString());
// }
// task3()
// function task4() {
//   function printMsgToScreen() {
//     mainContainer.innerHTML = `<h1>I LOVE TIMERS</h1>`;
//   }
//   var timeOutId = setTimeout(printMsgToScreen, 3000);
//   mainContainer.innerHTML = `<button id="clearTimeOutBtn">Stop the timer </button>`;
//   document
//     .getElementById("clearTimeOutBtn")
//     .addEventListener("click", function () {
//       clearInterval(timeOutId);
//     });
// }
// task4()
// function task5() {
//   mainContainer.innerHTML = `<h1 id="task5Title"> TITLE </h1>`;
//   document.getElementById("task5Title").style.color = "blue";
//   setTimeout(function () {
//     document.getElementById("task5Title").style.color = "red";
//   }, 3000);
// }
// task5()

///// SETINTERVAL/////////
//task1
function task1() {
  setInterval(function () {
    mainContainer.innerHTML += `<h1>TIMER</h1>`;
  }, 4000);
}
// task1()
//task2
function task2() {
  var counter = 0;
  setInterval(function () {
    mainContainer.innerHTML = `<h1>${counter++}</h1>`;
  }, 6000);
}
// task2()
function task3() {
  var IntervalId = setInterval(function () {
    mainContainer.innerHTML += `<h2>i love timers</h2>`;
  }, 5000);
  mainContainer.innerHTML += `<button onclick="clearInterval(${IntervalId});">stop the printing</button>`;
}

// task3();
// task 4
function task4() {
  function getTime() {
    var timeInString = new Date();
    return timeInString.toTimeString();
  }
  setInterval(function () {
    mainContainer.innerHTML = `<p> ${getTime()}</p>`;
  }, 1000);
}
// task4()
//task5
var userMin, userHour,timerStarted=0;
function task5() {
  inputCont.innerHTML += `
<label for="hours">Hours:</label>
<input type="number" id="hours" placeholder="Hours:">
<label for="minutes">minutes</label>
<input type="number" id="minutes" placeholder="minutes">
<button id="sendBtn" onclick="sendTime()"> send </button>`;
}
function sendTime() {
  userMin = document.getElementById("minutes").value;
  userHour = document.getElementById("hours").value;
  var minNotDoubleDigit = userMin < 10;
  var hourNotDoubleDigit = userHour < 10;
  document.getElementById("hoursClock").innerText = `${
    hourNotDoubleDigit ? `0${userHour}` : userHour
  }`;
  document.getElementById("minutesClock").innerText = `${
    minNotDoubleDigit ? `0${userMin}` : userMin
  }`;
}
function startOrStop(){
  timerStarted++
if(timerStarted %2 ==1){
  startTimer()
}
else{
  stopTimer()
}
}
function startTimer() {
  secondsItervalId=setInterval(secondCounterFunc, 1000);
}
var secondsCounter = 60;

function secondCounterFunc() {
  if ((secondsClock.innerText <= 0 && document.getElementById("minutesClock").innerText>0)|| secondsClock.innerText <= 0 && userHour>0) {
    secondsClock.innerText = 60;
    secondsCounter=60
    minuteCounterFunc()
  }
  secondsClock.innerText = --secondsCounter;
  if(secondsClock.innerText == 0 && minutesClock.innerText ==0 && hoursClock.innerText == 0){
    timesUpStoper()
  }
}
function minuteCounterFunc(){
var tempMinutes= +minutesClock.innerText
var minNotDoubleDigit = tempMinutes < 10;
minutesClock.innerText = `${
  minNotDoubleDigit ? `0${--tempMinutes}` : --tempMinutes
}`;
if(minutesClock.innerText<=0 &&hoursClock.innerText >0){
  minutesClock.innerText=59
  hourCounterFunc()
}

}
function hourCounterFunc(){
  var tempHours= +hoursClock.innerText
  var hourNotDoubleDigit = tempHours < 10;
  hoursClock.innerText = `${
    hourNotDoubleDigit ? `0${--tempHours}` : --tempHours
  }`;
}
function stopTimer(){
clearInterval(secondsItervalId)
}
function timesUpStoper(){
  alert("TimesUp")
  window.history.go()
}
task5();
