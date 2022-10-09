//Functions

/* Functions are reusable blocks of code

Parameters are values passed into the ( ) during the declaration of a ew function.
e.g function myfunction(parameters){
    //code to execute
 }


    arguements are the values passed inti the( ) during the call / instantiation of a function
    e.g myfunction(// arguements);

*/

// Examples

function addition(/* parameter */){
    // codes you want to be executed
}

addition(/* arguemeent*/);
// function declaration

function hello(){
    // console.log('hello');
}

// function instantiation

function add(num1, num2){
    let result = num1 + num2;
    // console.log(result);
}

//example 1

add(4,5);

//example 2

// adding a plus sign converts strings to numbers e.g '35' (string) will be converted to 35 (number)

// let userNum1 = +prompt('enter first num')
// let userNum2 = +prompt('enter second num')

// add(userNum1, userNum2);


// Task one.
/* a function that minus two numbers, the first num must be greater than or equal to the second number.
if the second number is greater than the first number, then show an error message.
*/

function minus(num1, num2){
if(num1 >= num2){
    let result = num1 - num2;
    // console.log(result);
}else{
    // console.log('first number must be greater than or equal to second number')
}

}
// let number1 = +prompt('enter first number');
// let number2 = +prompt('enter second number');

// minus(number1, number2);


// function divide(number1, number2){
//     if(number1 > number2){
//         let result = number1 / number2;
//         console.log(result);
//     }else{
//         console.log('number is indivisible');
//     }
// }

// divide(number1, number2);








//Task two
//create a greeter function that greets a person based on the time of the day.

let nameOfPerson = prompt('Enter your name');
let time = ('Evening');
let message = ('Nice to meet you');

function greet(nameOfperson, time, message){
    if(time == 'Morning'){
        let result = ' Good Morning ' + nameOfPerson + ', ' + message + '.';
        console.log(result)
    }else if(time == 'Afternoon'){
        let result = ' Good Afternoon ' + nameOfPerson + ', ' + message + '.';
        console.log(result)
    }else if(time == 'Evening'){
        let result = 'Good evening ' + nameOfperson + ', ' + message + '.';
        console.log(result)
    }
}

greet(nameOfPerson, time, message);


//create a function that would tell you if a person is good or bad

let name = prompt('Enter your name');
let surname = prompt('Enter your surname');

function reveal (name, surname){
    if(name == 'Mildred'){
        let result = 'You are a good person ' + name + ' ' + surname;
        console.log(result);
    }else{
        console.log('You are a bad person ' + name + ' ' + surname)

    }
    
}

reveal(name, surname)






