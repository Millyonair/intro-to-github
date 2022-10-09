//Conditionals

/*
1   if and else
2   switch
*/

// if( condition){
//     //code to be carried out if condition is met
// } else if() {
    
// }else{

// }

// examples

let age = 19

if (age <=1){
    console.log('you are infant');
} else if (age > 1 && age <=10){
    console.log('you are a child');
} else if (age >10 && age <= 18){
    console.log('you are a teenager');
}else{
    console.log('you are an adult');
}

// example 2

let num1;
let num2 = 20;

if (!num1){
    console.log('num1 is not available');
}else{
    console.log('num1 is availale');
}


//Prompt
// example

let userName = prompt('Enter your name');
console.log(userName);