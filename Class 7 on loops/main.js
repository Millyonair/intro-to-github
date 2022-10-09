//Loops
// loops are block of codes that can be executed many times 

//Types of loops
// 1. forloops
// 2. while
// 3. do while loop

// for loop 
let num = 20;

// for(let i = 0; i <= num; i++){
//     console.log(i);
// }


// while loop

let i = 0;

// while(i <= num){
//     console.log(i);
//     i++;
// }

// do while loop 
// the do while loop will execute thecode block once before cheching the condition

// do{
//     code block
// } while (cndition)


// example

let b = 0;
// do{
//     b++;
//     console.log(b);
// }while( b < 20);


// to check the total lenght of items in an array, we use the .lenght property
//Task one

let names = ['John', 'Tope', 'Mildred', 'Nkem', 'Dele'];

// for(let i = 0; i < names.length; i++){
//     console.log('names of persons are ' + names[i]);
// }


// example 2 
let namesofperson = ['John', 'Tope', 'Mildred', 'Nkem', 'Dele'];
let no = 1;
for(let i = 0; i < namesofperson.length; i++){
    console.log('No: ' + no + ' ' + namesofperson[i])
    no++;
}

// BREAK 
// The break is used to stop running loop.

// examle 

// let userNum = +prompt('enter a number');
// for(let i = 0; i < userNum; i++){
//     console.log(i);

//     if(i == 100){
//         break;
//     }
// }

// example 2
let animals = ['cat', 'dog', 'goat', 'pig', 'cow', 'sheep'];
let userInput = prompt('Enter name of any animal');

for(let i = 0; i < animals.length; i++){
    let oneAnimal = animals[i];

    if(userInput == oneAnimal){
        console.log('You win');
        break;
    }
}


