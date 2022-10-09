//Task one, write a javascript function to return the remainder from two numbers.

let num1 = 10;
let num2 = 3;

// let modofnum = num1 % num2;
// console.log(modofnum);

function modulous( num1, num2){
    if(num1 > num2){
        let result = num1 % num2;
        console.log(result)
    }else{
        console.log('num1 must be greater')
    }
}

modulous( num1, num2);