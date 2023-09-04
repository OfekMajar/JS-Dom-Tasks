// var intervalId=setInterval(moveRight,10)
var counter=0;
function moveRight(){
    smallBox.style.left=`${++counter}px`
    if(counter==150){
        clearInterval(intervalId)
        counter=0
        intervalId = setInterval(moveDown,10)
    }
}
function moveDown(){
smallBox.style.top = `${++counter}px`
if(counter==150){
    clearInterval(intervalId)
    intervalId=setInterval(moveLeft,10)
}
}
function moveLeft(){
smallBox.style.left=`${--counter}px`
if(counter==0){
    clearInterval(intervalId)
    counter=150
    intervalId=setInterval(moveUp,10)
}
}
function moveUp(){
smallBox.style.top=`${--counter}px`
if(counter==0){
clearInterval(intervalId)
intervalId=setInterval(moveRight,10)
}


}