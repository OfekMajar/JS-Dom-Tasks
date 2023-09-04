var mainContainer= document.getElementById("mainContainer")
function task1(){
mainContainer.innerHTML +=`
<h1 id="task1">over me</h1>
`
document.getElementById("task1").addEventListener("mouseover",function (){alert("welcome!")})

}
// task1()
function task2(){

    mainContainer.innerHTML +=`<div id="task2">print date to log </div>`
    document.getElementById("task2").addEventListener("mouseover",function (){console.log(Date());})
}
// task2()
function task3(){
    mainContainer.innerHTML+=`<h3 id="task3"> HOVERRR MEEE</h3>`
document.getElementById("task3").addEventListener("mouseover",function(){this.style="color:purple"})
}
// task3()
function task4(){
mainContainer.innerHTML += `
<button id="task4Btn"> </button>
<p id="task4P">CLICK ME TO CHANGE BUTTON SIZE </p>
`
document.getElementById("p").addEventListener("click",function()"})

}