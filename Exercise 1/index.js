/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter last number:"));

let operators = prompt("Enter operators: +,_,*,/");

let random = Math.floor(Math.random() * 20);

let result, text;

if(random < 10){
    if(operators === '+'){
        text = "<h3>You are calculating subtraction value:</h3>";
        result = num1 - num2;
    }
    else if(operators === '-'){
        text = "<h3>You are calculating addition value:</h3>";
        result = num1 + num2;
    }
    else if(operators === '*'){
        text = "<h3>You are calculating multiplication value:</h3>";
        result = num1 / num2;
    }
    else if(operators === '/'){
        text = "<h3>You are calculating division value:</h3>";
        result = num1 ** num2; 

    }
}
else{
    if(operators === '+'){
        text = "<h3>You are calculating addition value!</h3>";
        result = num1 + num2;
    }
    else if(operators === '-'){
        text = "<h3>You are calculating subtraction value!</h3>";
        result = num1 - num2;
    }
    else if(operators === '*'){
        text = "<h3>You are calculating multiplication value!</h3>";
        result = num1 * num2;
    }
    else if(operators === '/'){
        text = "<h3>You are calculating division value!</h3>";
        division = num1 / num2;
    }
}
console.log(random); 
document.write(`
      ${text} <br>
      Your first number is ${num1} <br>
      Your last number is ${num2} <br>
      You submitted for  ${operators}  this operators<br>
      The result is ${result}
    `);

   
     
