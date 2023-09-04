function changeColorToGreen() {
  document.getElementById("task11h3").style.color = "green";
}
// checkAgeAndColorText();
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
var counter = -1;
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
takeUserNameList();
namesList=document.getElementsByClassName("namesListItem");
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
    <li class="namesListItem "> ${userFullNamesArray[j].firstName} ${userFullNamesArray[j].lastName}</li>
    `;
  }
  var namesList = document.getElementsByClassName("namesListItem");
  for (let i = 0; i < namesList.length; i++) {
    firstNameValue = namesList[i].innerText;
    
    if (firstNameValue.charAt(0) == lastName.charAt(0)) {
      namesList.style = "color:red";
    }
  }
  document.getElementById(
    "searchingContainer"
  ).innerHTML += `<button id="createSearchBarBtn" onclick="searchName()" > Search </button>`;
//Used help
  document.getElementById("namesList").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
      event.target.style.display = "none";
    }
  });
  // 
}


function searchName() {
  document.getElementById("searchBarInput").style.display = "block";
  document.getElementById("createSearchBarBtn").style.display = "none";
  document.getElementById(
    "searchingContainer"
  ).innerHTML += `<button id="searchBtn" onclick="searchBarTyper()" onmouseover="HoveringLogMsg()"> Search </button>`;
  document.getElementById("searchingContainer").innerHTML +=` <button id="lengthOrganizerBtn" onclick="organizeByLength()" >Sort by length </button>`
  document.getElementById("searchingContainer").innerHTML +=` <button id="abcOrganizerBtn" onclick="organizeByAbc()" >Sort by abc </button>`
}
function searchBarTyper() {
    namesList=document.getElementsByClassName("namesListItem");
  var tempString = "";
  var part1="",part2="",part3=""
  
  var searchedIndex = 0;
  var searchedVal = document.getElementById("searchBarInput").value;
  
  for (let i = 0; i < namesList.length; i++) {
    
    tempString=namesList[i].innerText
    searchedIndex=tempString.indexOf(searchedVal)
    if(searchedVal ==tempString.substring(searchedIndex,(searchedIndex + searchedVal.length))){
    part1 =tempString.substring(0,searchedIndex) 
    part2=tempString.substring(searchedIndex,(searchedIndex + searchedVal.length))
    part3 =tempString.substring(searchedIndex + searchedVal.length)
    namesList[i].innerHTML = `${part1}<span style="color:blue">${part2}</span>${part3}`
    }
  }
}
function HoveringLogMsg(){
  console.log("the search button is being hovered");
}
function organizeByLength(){
  var namesLengthArr=[]
  for (let i = 0; i < namesList.length; i++) {
    namesLengthArr[i] = namesList[i].innerText;
  }
namesLengthArr.sort((a, b) => a.length - b.length);
document.getElementById("namesList").innerHTML =``;
for (let j = 0; j < namesLengthArr.length; j++) {
  document.getElementById("namesList").innerHTML += `
  <li class="namesListItem">${namesLengthArr[j]} </li>
  `;
}
console.log( namesLengthArr);
}
function organizeByAbc(){
  var namesAbcArr=[]
  for (let i = 0; i < namesList.length; i++) {
    namesAbcArr[i] = namesList[i].innerText;
  }
  namesAbcArr.sort();
document.getElementById("namesList").innerHTML =``;
for (let j = 0; j < namesAbcArr.length; j++) {
  document.getElementById("namesList").innerHTML += `
  <li class="namesListItem">${namesAbcArr[j]} </li>
  `;
}
console.log( namesAbcArr);

}