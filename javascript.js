
function add(a,b){
    return a + b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function subtract(a,b){
    return a - b;
}

let firstnumber = '';
let secondnumber = '';
let curroperator = '';

function operation(operator,a,b){
    a = Number(a);
    b = Number(b);

    switch(operator){
        
        case "+" :
            return add(a,b);

        case "-":
            return subtract(a,b);

        case "/":
             if(b == 0){
                return "Invalid";
             }
             return divide(a,b);

        case "*":
            return multiply(a,b);

        default:
            return "Invalid operator";
    }
}

const numberbtn = document.getElementsByClassName("numbers");
const displays = document.querySelector(".display");
let currentdisplay = "";

for(let i = 0;i<numberbtn.length;i++){
    numberbtn[i].addEventListener("click",function(){
        currentdisplay+= numberbtn[i].textContent;
        displays.textContent = currentdisplay;
        
    })
}