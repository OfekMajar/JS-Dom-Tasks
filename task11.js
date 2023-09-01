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
function changeBackColor() {
  document.getElementById("task11h3").style.color = "blue";
}
function checkUserAbove18() {
  var userBirthDate = prompt("Enter birth date YYYY-MM-DD");
  var userName = prompt("Enter name");
  var elemId = "task11h3";
  if (getAge(userBirthDate) >= 18) {
    document.body.innerHTML += `<h3 id="task11h3" onmouseover="changeColorToGreen()" onmouseout="changeBackColor()"> Welcome ${userName}</h3>`;
    document.getElementById("task11h3").style =
      "color:blue;width:max-content;height:max-content";
    //   setTimeout(takeUserNameList(),2000)
  } else {
    document.body.innerHTML += `<h3 id="task11png" > </h3>`;
    document.getElementById(
      "task11png"
    ).style = `color:red;background-image:url(https://thumbs.gfycat.com/AcceptableSomeBlackcrappie-size_restricted.gif);
      background-size: contain;
      background-repeat: no-repeat;
      `;
  }
}
//   checkUserAbove18()
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
var counter = 0;
var namesArr = [];
var lastName;

function takeUserLastName() {
  var container = document.getElementById("lastNameCont");
  container.innerHTML += `
  <label for="lastNameInput">Enter last name</label>
  <input type="text" id="lastNameInput" placeholder="last name">`;
  container.innerHTML += `<button id="lastNameInputBtn" onclick="clearLastNameCont()">send</button> `;
}
takeUserLastName();
function clearLastNameCont() {
  lastName = document.getElementById("lastNameInput").value;
  console.log(lastName);
  document.getElementById("lastNameCont").style.display = "none";
  document.getElementById("firstNamesCont").style.display = "block";
}
function takeUserNameList() {
  namesArr[counter] = document.getElementById("userNamesInput").value;
  counter++;
  document.getElementById("userNamesInput").value = "";
  document.getElementById("userNamesInput").focus();
  if (counter > 3) {
    console.log(namesArr);
    createUserFullNameObjAndPrintList();
  }
}
function createUserFullNameObjAndPrintList() {
  var userFullNamesArray = [];
  for (let i = 0; i < 4; i++) {
    var userFullNameEntry = {};
    userFullNameEntry.firstName = namesArr[i];
    userFullNameEntry.lastName = lastName;
    userFullNamesArray[i] = userFullNameEntry;
  }
  document.getElementById("namesList").style.display = "block";
  document.getElementById("firstNamesCont").style.display = "none";
  for (let j = 0; j < userFullNamesArray.length; j++) {
    document.getElementById("namesList").innerHTML += `
    <li class="namesListItem"> ${userFullNamesArray[j].firstName} ${userFullNamesArray[j].lastName}</li>
    `;
  }
  var namesList = document.getElementsByClassName("namesListItem");
  for (let i = 0; i < namesList.length; i++) {
    firstNameValue=namesList[i].innerText
    console.log(firstNameValue.charAt(0), lastName.charAt(0));
    if(firstNameValue.charAt(0)== lastName.charAt(0)){
        namesList[i].style="color:red"
    }
  }
}
