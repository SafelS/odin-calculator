let equation = "";

let screenDiv = document.querySelector(".screen");



let number1 = 0;
let operator = "";
let number2 = 0;

function operate (op, n1, n2){
    if(op === "+"){
        return add(n1,n2);
    }else if(op === "-"){
        return subtract(n1,n2);
    }else if(op === "/"){
        return divide(n1, n2);
    }else{
        return multiply(n1,n2);
    }
}

function equalPressed(){

    let parts = equation.split(/([+\-*/])/).filter(p => p!== ""); //ChatGPT

    /*console.log(parts.length)
    console.log(parts[0]);
    console.log(parts[1]);
    console.log(parts[2]);*/
    console.log(number1);
    console.log(parts.length)

    if(parts.length === 2){
        operator = parts[0];
        number2 = parseFloat(parts[1]);
    }else{
        number1 = parseFloat(parts[0]);
        operator = parts[1];
        number2 = parseFloat(parts[2]);
    }
    
    
    let result = operate(operator, number1, number2);
    number1 = result;

    screenDiv.textContent = result;
    equation = "";
    parts.length = 0;
}

function add(a, b){
    
    return a+b;

}

function subtract(a,b){

    return a-b;

}

function divide(a,b){

    return a/b;

}

function multiply(a,b){

    return a*b;
    
}

function clearPressed() {
    equation = "";
    number1 = 0;
    number2 = 0;
    operator = "";
    screenDiv.textContent = "0";
}


function a() {
    let buttons = document.querySelectorAll(".calc-button");

    for (const item of buttons) {
        item.addEventListener("click", function() {
            equation =  equation + this.value;
            screenDiv.textContent = equation;
        });
    }

}

a();