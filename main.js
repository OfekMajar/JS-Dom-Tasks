var elemText;
// elemText = document.getElementById("taskOne");
// console.log(elemText.innerText);
// //2
// elemText = document.getElementById("task2");
// elemText.innerText = "My dom app";
//3
// elemText = document.getElementById("spanTask3");
// console.log(elemText.innerText);
// elemText = document.getElementById("h1Task3");
// console.log(elemText.innerText);
// elemText = document.getElementById("pTask3");
// console.log(elemText.innerText);
// elemText = document.getElementById("h2Task3");
// console.log(elemText.innerText);
// // 4
// classElemsArr = document.getElementsByClassName("task3Class");
// console.log(classElemsArr);
// //5
// console.log(classElemsArr[1]);
// //6
// console.log(classElemsArr[2].innerText);
// //7
// tagElemArr = document.getElementsByTagName("h1");
// for (let i = 0; i < tagElemArr.length; i++) {
//   console.log(tagElemArr[i].innerText);
// }
//8
// function createH2TagWithUserText() {
//   document.body.innerHTML += "<h2>" + prompt("Enter text") + "</h2>";
// }
//9
// function printToScreenUserInfo() {
//   var userColor = prompt("Enter color");
//   var numOfTimes = +prompt("Enter number of times");
//   for (var i = 0; i < numOfTimes; i++) {
//     document.body.innerHTML += "<span >" + userColor + "</span> "+"<br>";
//   }
// }
// printToScreenUserInfo();
function createTagAndEnterTextFromUser() {
  var userText = prompt("Enter text");
  var userTagName = prompt("Enter tag name");
  document.body.innerHTML += `<${userTagName}> ${userText} </${userTagName}>`;
}

// createTagAndEnterTextFromUser()
//11
function createInputType() {
  var inputType = prompt("Enter input type");
  document.body.innerHTML += `<input type=${inputType}>`;
}
// createInputType()
//12
function changeValueOfAllClasses(className1, Text) {
  classesArr = document.getElementsByClassName(className1);
  for (var i = 0; i < classesArr.length; i++) {
    classesArr[i].innerText = Text;
  }
}
changeValueOfAllClasses("task12", "helfgdgdflo");
function addSpanToPara() {
  var paraClassArr = document.getElementsByClassName("task13");
  for (let i = 0; i < paraClassArr.length; i++) {
    paraClassArr[i].innerHTML = `<span> text </span>`;
  }
}
// addSpanToPara()
//14
function printInfoAndif18AddInput() {
  var firstName = prompt("Enter first name");
  var lastName = prompt("Enter last name");
  var age = +prompt("Enter age");
  document.body.innerHTML += `<p>${firstName} ${lastName} ${age} </p>`;
  // document.writeln(`${firstName} ${lastName} ${age}`)
  if (age >= 18) {
    document.body.innerHTML += `<input type=text> </input>`;
  }
}
// printInfoAndif18AddInput()
//15
function movieObjMaker() {
  var movie = {
    name: prompt("Enter movie name"),
    watches: +prompt("Enter number of watches"),
    year: +prompt("Enter movie year"),
    img: prompt("Enter image URL"),
  };

  document.body.innerHTML = `<div id=divCont15> </div>`;
  document.getElementById(`divCont15`).innerHTML = `
  <h1> the move name is ${movie.name}</h1>
<h2> the number of watches is ${movie.watches}</h2>
<h6> the year the movie came out in is ${movie.year}</h6>
<img src="${movie.img}" alt="">
  `;
}
// movieObjMaker()
//16
function makeWorkerObjAndPrint() {
  var worker = {
    firstName: prompt("Enter first name "),
    lastName: prompt("Enter last name"),
    section: prompt("Enter worker section"),
    email: prompt("Enter email"),
  };

  document.getElementById(
    "divContainer"
  ).innerHTML += `<p>${worker.firstName} </p>
  <p>${worker.lastName} </p><p>${worker.section} </p><p>${worker.email} </p>`;
}
// makeWorkerObjAndPrint();
//17
function makeNumOfObjByUserNumber() {
  var buildingObj = {};
  var buildingObjArr = [];
  numOfObj = +prompt("Enter the number of objects");
  for (var i = 0; i < numOfObj; i++) {
    buildingObj.contractorName = prompt("Enter contractor name ");
    buildingObj.companyName = prompt("Enter company name");
    buildingObj.numOfFloors = +prompt("enter the amout of floors");
    buildingObj.numOfApartmentsEachFloor = +prompt(
      "enter the number of apartments in each floor"
    );
    buildingObjArr[i] = buildingObj;
    document.getElementById("divContainer").innerHTML += `
    <p class=buildingObjPara> 
    contractor name: ${buildingObjArr[i].companyName} <br>
    company name: ${buildingObjArr[i].companyName} <br>
    number of floors: ${buildingObjArr[i].numOfFloors} <br>
    number of aparments in each floor: ${buildingObjArr[i].numOfApartmentsEachFloor}
    </p>
    `;
  }
}
// makeNumOfObjByUserNumber()
//18
// document.getElementById("divContainer").innerHTML+=`
// <input type=text id=inputName placeholder=Store Name> <Br>
// <input type=text id=inputAddress placeholder=Store address> <Br>
// <input type=number id=inputNumOfSections placeholder=number of store section> <br>
// <input type=number id=inputNumberofworkers placeholder=Number of workers>
// `
function printObjOfWorkerCountHigh10() {
  var storeObj = {};
  var storeObjArr = [];
  numOfObj = prompt("Enter the number of objects");
  for (var i = 0; i < numOfObj; i++) {
    storeObj.storeName = prompt("Enter Store name ");
    storeObj.storeAddress = prompt("Enter store address");
    storeObj.numOfSections = +prompt("enter the amount of sections");
    storeObj.numOfWorkers = +prompt("enter the number of workers");
    storeObjArr[i] = storeObj;
    if (storeObjArr[i].numOfWorkers > 10) {
      document.getElementById("divContainer").innerHTML += `
    <p class=buildingObjPara> 
    store's name: ${storeObjArr[i].storeName} <br>
    store address: ${storeObjArr[i].storeAddress} <br>
    number of sections: ${storeObjArr[i].numOfSections} <br>
    number of workers: ${storeObjArr[i].numOfWorkers}
    </p>
    `;
    }
  }
}
// printObjOfWorkerCountHigh10();
//19
function checkHowManyObjCreated() {
  var objPara = document.getElementsByClassName("buildingObjPara");
  console.log(objPara.length);
}
// checkHowManyObjCreated()
//20
function makeContactList() {
  var contactObj = {};
  var contactObjArr = [];
  numOfObj = prompt("Enter the number of objects");
  for (var i = 0; i < numOfObj; i++) {
    contactObj.fullName = prompt("Enter full name ");
    contactObj.comapny = prompt("Enter store address");
    contactObj.phoneNumbr = +prompt("enter phone number");
    contactObj.email = prompt("enter email");
    contactObjArr[i] = contactObj;
    document.getElementById("divContainer").innerHTML += `
    <ul id=contactList> </ul>
    `;
    for (let j = 0; j < contactObjArr.length; j++) {
      document.getElementById("contactList").innerHTML += `
    <li>${contactObjArr[j].fullName} </li>
    `;
    }
  }
}
// makeContactList()
//22
// document.getElementById("divContainer").innerHTML += `
// <ol>
// <li>${prompt("Enter color")}</li>
// <li>${prompt("Enter color")}</li>
// <li>${prompt("Enter color")}</li>
// <li>${prompt("Enter color")}</li>
// </ol>

// `;
//23
// var student={}
// student.fullName=prompt("Enter full name")
// student.email=prompt("Enter email")
// student.grade=+prompt("Enter grade")
// document.getElementById("divContainer").innerHTML +=`
// <table>
// <thead>
//   <th>full name</th>
//   <th>email</th>
//   <th>grade</th>
// </thead>
// <tbody>
//   <tr>
//     <td>${student.fullName}</td>
//     <td>${student.email}</td>
//     <td>${student.grade}</td>
//   </tr>
// </tbody>
// </table>
// `
//24
// var carsObjArr = [];
// var cars = {};
// for (var i = 0; i < 3; i++) {
//   cars.company = prompt("Enter car's company");
//   cars.color = prompt("Enter car's color");
//   cars.forSale = prompt(
//     "Enter true/false if the car is for sale or not"
//   );
//   carsObjArr[i]=cars
// }
// document.getElementById("divContainer").innerHTML += `
// // <table>
// // <thead>
// //   <th>company Name</th>
// //   <th>color</th>
// //   <th>for Sale</th>
// // </thead>
// // <tbody id=tableBodyT24>
// // </tbody>
// // </table>
// `;
// for (var i = 0; i < carsObjArr.length; i++) {
//   document.getElementById("tableBodyT24").innerHTML += `
// <tr>
// <td>${carsObjArr[i].company}</td>
// <td>${carsObjArr[i].color}</td>
// <td>${carsObjArr[i].forSale}</td>
// </td>
// `;
// }
//25
// var boss = {
//   firstName: "ofek",
//   lastName: "maj",
//   age: 1999,
//   sallary: 100000,

// };
// document.writeln(
//   boss.firstName,
//   boss.lastName,
//   boss.age,
//   boss.sallary

// );
//26
// var worker = {
//   firstName: "ofek",
//   lastName: "maj",
//   birthYear: 1999,
//   email: "ofke@asd.co",
//   address: "rishon",
// };
// document.writeln(
//   worker.firstName,
//   worker.lastName,
//   worker.birthYear,
//   worker.email,
//   worker.address
// );
//27
// var fruit = {
//   Name: "banna",
//   color: "yellow",
//   kind: "isralisda"
// };
// document.writeln(fruit.Name)
// document.writeln(fruit.color)
// document.writeln(fruit.kind)
//28
// var classObj={
//   studNum:15,
//   classNum:3,
//   studName:["fred","Avi","eagle","ron","Dean"]
// }
// document.getElementById("divContainer").innerHTML+=
// `
// <p> ${classObj.studNum}</p>
// <p> ${classObj.classNum}</p>
// <ul id=studNameList> </ul>
// `
// for (let i = 0; i < classObj.studName.length; i++) {
// document.getElementById("studNameList").innerHTML+=
//   `
//   <li>${classObj.studName[i]} </li>
//   `
// }
//29 ?
