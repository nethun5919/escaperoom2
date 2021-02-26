
var readlineSync =require('readline-sync');
var firstNumber = readlineSync.question("Please enter your first number:");
var secondNumber= readlineSync.question("Please enter your secondnumber:");
var enterdOperation = readlineSync.question("Please enter the operation to perfor: add, sub, mul, div");


function addTwoNumbers(num1, num2){
    return num1 + num2;
}


function Calculator (num1,num2, operation){
    if (operation == "add"){ 
       return  num1 + num2;
       console.log("adding Numbers-1: " + num1, " with Number-2: " + num2, " return a result of: " + addTwoNumbers(num1,num2));

   }
    else if (operation == "sub"){
       return num1- num2;
        console.log("subtracting Numbers-1: " + num1, " with Number-2: " + num2, " return a result of: " + subTwoNumbers(num1,num2));
    }
    else if(operation == "div"){
       return num1 / num2;
        console.log(" divideing Numbers-1: " + num1, " with Number-2: " + num2, " return a result of: " + divTwoNumbers(num1,num2));
    }
    else if(operation == "mul"){
         return num1* num2;

    }
    }
        Calculator(firstNum,secondNum, enterdOperation);
    
