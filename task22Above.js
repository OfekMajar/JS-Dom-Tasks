// document.getElementById(
//   "divContainer"
// ).innerHTML += `<ol id="countriesList"> </ol>`;
// for (var i = 0; i < 5; i++) {
//   document.getElementById("countriesList").innerHTML += `<li> ${prompt(
//     "Enter country name"
//   )} </li>`;
// }
// 23
// var teacher = {};
// teacher.fullName = prompt("Enter teacher's full name");
// teacher.email = prompt("Enter teacher's email");
// teacher.subject = prompt("Enter teacher's subject");
// document.getElementById("divContainer").innerHTML += ` <table>
// <thead> <th>Full Name</th> <th>Email</th> <th>subject</th></thead>
// <tbody>
//     <tr><td>${teacher.fullname}</td><td>${teacher.email}</td><td>${teacher.subject}</td></tr>
// </tbody>
// </table>`;
//24
// document.body.style = "display:flex ; justify-content: center;";
// var companiesArr = [
//   { name: "automob", city: "Rishon", workersAmount: 214, recruiting: true },
//   { name: "selopark", city: "Tel-Aviv", workersAmount: 100, recruiting: false },
//   { name: "google", city: "Herzelia", workersAmount: 152, recruiting: false },
// ];
// for (var i = 0; i < companiesArr.length; i++) {
//   document.getElementById("mainTableBody").innerHTML += `
//     <tr>
//           <td>${companiesArr[i].name}</td>
//           <td>${companiesArr[i].city}</td>
//           <td>${companiesArr[i].workersAmount}</td>
//           <td>${companiesArr[i].recruiting}</td>
//         </tr>
//         `;
// }
// document.getElementById("mainTable").style.borderCollapse = "collapse";
// thStylingCollection = document.getElementsByTagName("th");
// for (var i = 0; i < thStylingCollection.length; i++) {
//   thStylingCollection[i].style = "border:1px solid #000;padding:10px";
// }
// tdStyingCollection = document.getElementsByTagName("td");
// for (var i = 0; i < tdStyingCollection.length; i++) {
//   tdStyingCollection[i].style = "border:1px solid #000;padding:10px";
// }

//37 לא עובד
// function createComputerObjArr(numOfTimes) {
//   var computerObjArr = [];

//   for (let i = 0; i < numOfTimes; i++) {
//     computerObjArr.push = {
//       company: prompt("enter computer's company"),
//       type: prompt("enter type of computer"),
//       weight: +prompt("Enter computer's weight in kg"),
//       inStock: prompt("Enter true if is in stock, false if not"),
//     };
    
//   }
//   return computerObjArr
// }


// function printComputersInStockAbove2kg(array){
  
// for (let i = 0; i < array.length; i++) {
//   if (array[i].inStock == true && array[i].weight > 2) {
//     document.getElementById("divContainer").innerHTML += `<p>
//     ${computerObjArr[i].company} <br>
//     ${computerObjArr[i].type} <br>
//     ${computerObjArr[i].weight} <br>
//     ${computerObjArr[i].inStock}
//     </p>`;
//   }
// }
// }
// var arr=createComputerObjArr(+prompt("Enter number of computers"))
// printComputersInStockAbove2kg(arr)
