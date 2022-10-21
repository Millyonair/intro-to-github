// What is DOM 
// D- Document
// O- Object
// M- Model 

// DOM is a standard way of accessing document 

//Methods f accessing html dm
// belw are the three different ways used to access the html dom

let h1 = document.getElementsByClassName('heading-one');
let h2 = document.getElementById('heading-two');
let h3 = document.querySelector('.heading-three');
let input = document.querySelector('.username');

// console.log(h2);


// Changing stlyes of html elements

//textContent and innerText (used to access content of html)
// innerHTML (used to access the html content of an element i.e a nested html)
//value ( this is used to access values of an element. eg values in input, forms)

//syntax for textContent and innerText
console.log(h3.textContent);
console.log(h3.innerText);


//syntax for innerHTML
let item = document.querySelector('.item');
console.log(item.innerHTML);

// syntax for value 
console.log(input.value);

