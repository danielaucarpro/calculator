// Calculator
//variables
var result = document.getElementById('result');
var plusMinus = document.getElementById('plusMinus');

$(document).ready(() => {
    let operator = document.querySelectorAll('#operator');
    //for each operator class I have in my html, make the button disabled.
    for (i = 0; i < operator.length; i++) {
        operator[i].disabled = true;
    }
})

//Clearing the screen
function clearScreen() {
    //when the button id clicked set the value of the result element to blank
    result.value = '';
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
    //the result value now will be the result of a basic operation done by eval
    //eval gets the value inside input and make a operation according with what user typed
    result.value = eval(result.value);
}

//changing the number to positive and negative value. Using true or false method
//on click add a minus value in front of the number
//if clicked again remove 
function plusMinus() {
    result.value = '-' + result.value;
}

//converting the number to percentage format
function percentage() {
    if (result.value != 0) {
        result.value = eval(result.value);
        let percentage = result.value / 100;
        console.log(percentage);
        result.value = '';
        sendNumber(percentage);
    }
}