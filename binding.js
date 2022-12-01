//Binding simply means making the program remember our required values whenever necessary.

let caught= 5*5;
console.log(caught);

//Binding values can be changed according to the need of the program
//Program to remember the remaining dept of a friend.

let dept=150;
//suppose that friend paid Rs.35 then the remaining dept is
dept=dept-35;
console.log("Rs." + dept);


//If we ask for the value of an empty binding, we get "undefined"
let one;
console.log(one);	//undefined

//var and const are also used to binding

var name= "Tony";
const greeting= "Hello";
console.log(greeting + ", "+ name);


