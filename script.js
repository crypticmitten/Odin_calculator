var first = new Number();
var operator = new String(); 
var second = new Number();

function add(num1, num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
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