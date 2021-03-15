//Clearing the screen
function clearScreen() {
    //when the button id clicked set the value of the result element to blank
    document.getElementById('result').value = "";
}

//Change the result value according with number/operator clicked
function sendValue(value){
    //the element with ID result will receive the value from the button clicked. 
    // in html each button has a on click event sending a value to the input result
    document.getElementById('result').value += value
}

//do basic operations doing eval
function evalOp(){
    // storing the input with result id
    let result = document.getElementById('result');

    //the result value now will be the result of a basic operation done by eval
    //eval gets the value inside input and mate a operation according with what user typed
    result.value = eval(result.value);
}