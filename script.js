//variables
var result = document.getElementById('result');
 
//on document ready
$(document).ready(result.value = 0)

//Clearing the screen
function clearScreen() {
    //when the button id clicked set the value of the result element to blank
    result.value = 0;
}

//Change the result value according with number clicked
function sendNumber(value) {
    //sending the value to result input
    result.value += value;
    //getting all inputs with operator ID so I can reverse the disabled status
    //I am storing all operator nodes twice because if I try to get it only once, with a unique variable on top, all my buttons will be always desabled
    let operator = document.querySelectorAll('#operator');
    //so for each operator class I have in my html, make the button available again.
    for (i = 0; i <= operator.length; i++) {
        operator[i].disabled = false;
    }
}

function sendOperator(value) {
    result.value += value;
    let operator = document.querySelectorAll('#operator');
    //for each operator class I have in my html, make the button disabled.
    for (i = 0; i < operator.length; i++) {
        operator[i].disabled = true;
    }
}

//do basic operations doing eval
function evalOp() {
    // storing the input with result id
    let result = document.getElementById('result');

    //the result value now will be the result of a basic operation done by eval
    //eval gets the value inside input and make a operation according with what user typed
    result.value = eval(result.value);
}

//changing the number to positive and negative value. Using true or false method
//on click add a plus o minus value in front of the number
//if there is a operator already do nothing
function plusMinus() {
    result.value = '-' + result.value;
    let count = 0;
    count++;
    console.log(count);
}

function removePlusMinus(bool){
    if(bool = true){
        result.value = "" + result.value;
        iveBeenPressed = false;
        console.log(iveBeenPressed);
    }
}

//converting the number to percentage format
function percentage() {
    var result = document.getElementById('result');
    if (result.value === null) {
        document.getElementById('result').value = "";
    }
    else if (result.value != 0) {
        result.value = eval(result.value);
        let percentage = result.value / 100;
        console.log(percentage);
        result.value = '';
        sendOperator(percentage);
    }
}