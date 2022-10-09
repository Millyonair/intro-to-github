// OBJECT: Objects are variables with many values. seperated with a coma
// METHODS: Methods are functions that live inside an object


//object example

let car = {
    name: 'bmw',
    model: '2000',
    color: 'red',
}; 

// personal example

let millyon ={
    name: 'Mildred',
    talent: 'singing',
    hubby: 'travelling',
    profession: 'programmer',
    sideBusiness: 'jewelry',
    about: function(){
        console.log('There is a girl called ' + this.name + '. She is a girl blessed by God with many virtues. She loves ' + this.talent + ' and ' + this.hubby + '. While ' + this.hubby + ', she would be ' + this.talent + ' throughout the journey. ' + this.name + ' is a ' + this.profession + ', who also has a business where she sells ' + this.sideBusiness + '.')
    }
};

// millyon.about();





// console.log(car.name); // accessing object using the . notation
// console.log(car['name']); // aaccessing object value using the []

// example of methods

let book = {
    // title: prompt('enter title'),
    // author: prompt('enter author'),
    // date: prompt('enter date'),
    summary: function(){
        console.log('Book title' + this.title + 'book author:' + this.author); // 'THis' here represents the variable 'book'
    }
}

// book.summary();



// example 2

let human = {
    name: 'Milly',
    age: '20',
    gender: 'female',

    movement: function(){
        console.log(this.name+ ' is moving');
    },

    eating: function(){
        console.log(this.name+ ' is eating');
    }
};

// human.eating();



// ARRAYS

// Arrays are variables that holds many values.
// difference between arrays an objects is that an object have key and value pair, while arrays have only values.
//array values are accessed by their index num. Every array value index starts at 0.


// examples: 

//Arrays of strings
// let fruits = ['mango', 'apple', 'pear']; // method 1

//array of numbers
let fruit2 = Array(1,2,3,4,5); // method 2

//array of objects
let cars = [
    {
        name: 'bmw',
        model: 2000
    }
]

// console.log(fruits); // ['mango', 'apple', 'pear']
// console.log(fruit2); // [1,2,3,4,5]
// console.log(cars[0].name); //bmw



// personal examples on arrays

// method one 
let milly = [ 'talent', 'hubby', 'profession'];
// console.log(milly);

// method two 
let milly2 = Array('singing', 'dancing', 'developer', 'jewelry');
// console.log(milly2);

// array of objects 
let mildrose = [
    {
        name: 'Mildred',
        age: 30,
        religion: 'Christianity',
        nationality: 'Nigerian',
        gender: 'Female'
    }
]
// console.log(mildrose)

// Array methods 

/*
* toString (this is used to convert array to string)
* push (this adds a new element at the end of an array)
* pop (this removes the last element from an array)
* shift (this removes the first element in an array)
* unshift (this adds a new element to the begining of an array)
* delete (this deletes element from an array using index)
*/

let fruits = ['mango', 'apple', 'pear']; 

//toString
let stringFruits = fruits.toString();
// console.log(stringFruits);

//push
fruits.push('orange', 'banana', 'pawpaw')

//pop
fruits.pop()

// shift
fruits.shift()

//unshift
fruits.unshift('strawberry')

//delete
delete(fruits[[2]]);

// console.log(fruits);


// Project 1 (class attendance for secondary school)

let names = [];

function attendance(){
    let username = prompt ('enter your user name');

    names.push(username);
    console.log(names)
}

function deleteAttend(index){
    delete(names[index]);
    console.log('name deleted');
    console.log(names);
}



// project 2 (create an app to manage yor bookstore)
// books have a title and price
// book app should have the following functions
// 1. you can add new books
// 2. you can delete new books

let books = [];

// arrays of strings 
function bookStore(){
    let bookTitle = prompt ('enter book title');
    books.push(bookTitle);
    let price = prompt ('enter price')
    console.log(books);
}

function deletebook(index){
    delete(books[index]);
    console.log('book deleted');
    console.log(books);
}

// arrays of objects

function bookStore(){
    let bookTitle = prompt ('enter book title');
    let price = prompt ('enter price');

    books.push({
        bookTitle, price 
    })
    console.log(books);

}

// Assignment ( create an app to manage your ecommerce dtore inventory)
// products should have {id, name, price,quantity, description}
// you can add products
// you can delete products
// show total of all products

let inventory = [];

function products(){
    let productName = prompt ('enter product name');
    let productId = prompt ('enter product ID');
    let productPrice = prompt ('enter product price');
    let quantity = prompt ('enter quantity');
    let description = prompt ('enter description');
    
    inventory.push({
        productName, productId, productPrice, quantity, description
    })
    console.log(inventory);
}



function deleteproducts(index){
    delete(inventory[index]);
    console.log('product deleted');
    console.log(inventory);
}

function showAll(){
    console.log(inventory)
}



