//Clearing the screen
function clearScreen() {
    //when the button id clicked set the value of the result element to blank
    document.getElementById('result').value = "";
}

//Change the result value according with number/operator clicked
function sendValue(value) {
    //the element with ID result will receive the value from the button clicked. 
    // in html each button has a on click event sending a value to the input result
    if(value !== Number){
        document.getElementById('result').value += value;
    }
    else{
        let num = Number(value);
        document.getElementById('result').value += num.toLocaleString("en");
    }
}

//do basic operations doing eval
function evalOp() {
    // storing the input with result id
    let result = document.getElementById('result');

    //the result value now will be the result of a basic operation done by eval
    //eval gets the value inside input and mate a operation according with what user typed
    result.value = eval(result.value);
}

function plusMinus() {
    var boolean = '';
    console.log(boolean);
    if (boolean == true) {
        sendValue('+');
        boolean = true;
        console.log(boolean);
    }
    else if(boolean == false){
        console.log(boolean);
        sendValue('-');
        boolean = true;
    }
    
}

function percentage(value) {
    let result = document.getElementById('result');
    if (result.value === null) {
        document.getElementById('result').value = "";
    }
    else if (result.value > 0) {
        sendValue(value);
        document.getElementById('result').value = value/100;
    }
}