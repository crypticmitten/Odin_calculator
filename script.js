var first = '';
var operator = ''; 
var second = '';
var output = document.getElementById("screen");
var displayValue = output.innerHTML;
var operatorIn = false

var operators = {
    "+":"add",
    "-":"subtract",
    "x":"multiply",
    "/":"divide"
}

function add(num1, num2){
    return Number(num1)+Number(num2);
}

function subtract(num1,num2){
    return Number(num1)-Number(num2);
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2
}

function operate(operator,num1,num2){
    return window[operator](num1,num2);
}

function fill(value){
    output.textContent += String(value);
    displayValue += String(value);
    if (["+","-","x","/"].includes(value)){
        operatorIn = true
        operator = operators[value];
        return
    }
    if(!operatorIn){
        first += String(value);
    }
    else {
        second += String(value);
    }
}

function equate(){
    if(!operatorIn || !second){
        return
    }
    output.textContent = parseFloat(window[operator](first,second).toFixed(3));
    first = output.textContent
    operator = '';
    second = '';
    operatorIn = false;
}

function Clear(){
    output.textContent = '';
    first = '';
    operator = '';
    second = '';
    operatorIn = false;
}