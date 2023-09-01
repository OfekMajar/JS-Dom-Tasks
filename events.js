function welcomeAlert() {
  alert("Welcome!");
}
function printLogTime() {
  var time = new Date();

  console.log(time.toTimeString());
}
function changeBackgroundColorToPurple() {
  document.getElementById("task3").style.background = "purple";
}
function changeButtonWidth() {
  document.getElementById("task4").style.width = "10px";
}
//5
function changeText() {
  document.getElementById("task5First").innerText = "RANDOM TEXT";
}
//1
function printInputColor(color) {
  console.log(color);
}
function writeIntoDiv(text) {
  document.getElementById("task2Inputs").innerText = text;
}

function writeToH1InputText() {
  task3h1.innerHTML = task3input.value;
}
//6 challange
function printToScreenInputUsingButton() {
  task6div.innerText = task6input.value;
}
//7
function changeBackgroundByTime() {
  var myDate = new Date();
  if (myDate.getHours < 12) {
    document.body.style.background = "yellow";
    document.body.innerHTML += `<h1>Good day</h1>`;
  } else {
    document.body.style.background = "blue";
    document.body.innerHTML += `<h1>Good night</h1>`;
  }
}
// changeBackgroundByTime()
//8
// function checkAgeAndColorText() {

//     document.body.innerHTML += `<input type:"text" placeholder="Enter age" id="task8input"> `;
//     var userAge=document.getElementById("task8input").value

//     if (userAge >= 18) {
// document.getElementById("task8h3").style.color="red"
// document.body.innerHTML += `<h3 id="task8h3"> Welcome</h3>`;
//   }
//   else{
// document.getElementById("task8h3").style.color="blue"
// document.body.innerHTML += `<h3 id="task8h3"> Welcome</h3>`;
//   }
// }

function checkAgeAndColorText() {
  var userAge = +prompt("Enter age");

  if (userAge >= 18) {
    document.body.innerHTML += `<h3 id="task8h3" onmouseover="changeColorToGreen()"> Welcome </h3>`;
    document.getElementById("task8h3").style.color = "red";
  } else {
    document.body.innerHTML += `<h3 id="task8h3" onmouseover="changeColorToGreen()"> Welcome</h3>`;
    document.getElementById("task8h3").style.color = "blue";
  }
}
function changeColorToGreen() {
  document.getElementById("task11h3").style.color = "green";
}
// checkAgeAndColorText();
//9
var userNumArr = [];
var counter = 0;
function randomNumGen() {
  userNumArr[counter] = +document.getElementById("task9userNum").innerText;
  counter++;
  document.getElementById("task9userNum").value = "";
  document.getElementById("task9userNum").focus();
  if (counter == 5) {
    if (checkIfRandomNumSameAsNum(userNumArr) == true) {
      document.body.innerHTML = `
    <h1> You won!</h1>`;
    } else {
      document.body.innerHTML = `
    <h1> You lost!</h1>`;
    }
  }
}
function checkIfRandomNumSameAsNum(userNumArr) {
  var randNum = Math.floor(Math.random() * 57);
  console.log(randNum);
  for (let i = 0; i < userNumArr.length; i++) {
    if (userNumArr[i] === randNum) {
      return true;
    }
  }
  return false;
}
//10
//11
function changeBackColor(){
  document.getElementById("task11h3").style.color = "blue"  
}
function checkUserAbove18() {
  var userBirthDate = prompt("Enter birth date YYYY-MM-DD");
  var userName = prompt("Enter name");
  var elemId = "task11h3";
  if (getAge(userBirthDate) >= 18) {
    document.body.innerHTML += `<h3 id="task11h3" onmouseover="changeColorToGreen()" onmouseout="changeBackColor()"> Welcome ${userName}</h3>`;
    document.getElementById("task11h3").style = "color:blue;width:max-content";
    setTimeout(takeUserNameList(),2000)
  } else {
    document.body.innerHTML += `<h3 id="task11h3" > </h3>`;
    document.getElementById(
      "task11h3"
    ).style = `color:red;background-image:url(https://thumbs.gfycat.com/AcceptableSomeBlackcrappie-size_restricted.gif);
    background-size: contain;
    background-repeat: no-repeat;
    `;
  }
}
checkUserAbove18()
//Got from another task
function getAge(userDateRecevied) {
  var userDate = userDateRecevied;
  var myDate = new Date(userDate);
  var currentDate = new Date();
  var age = 0;
  age = currentDate.getFullYear() - myDate.getFullYear();
  if (
    currentDate.getMonth() < myDate.getMonth() ||
    (currentDate.getMonth() == myDate.getMonth() &&
      currentDate.getDate() < myDate.getDate())
  ) {
    age--;
  }
  return age;
}
function takeUserNameList(){
    var namesArr=[]
    var lastName
    alert("You will now enter 4 names and then the last name all 4 names share")
    for (let i = 0; i < 4; i++) {
        namesArr[i]=prompt(`Enter name number ${(i+1)}`)
    }
    lastName=prompt("Enter last name")
    document.body.innerHTML += `<button onclick="createNameList">print namesList </button>`;
    
}
