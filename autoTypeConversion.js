//Let's explore the ability of JS to automatically convert the type and give meaningful output

console.log(8 * null);	//0
console.log("5" - 1);	//4
console.log("5" + 2);	//51
console.log("five" * 2);	//NaN
console.log(false == 0);	//true


//Checking some confusing things, yet important
console.log(null == undefined);
console.log(null == 0);


///Remember
//It is best to use triple operators like === or !== to prevent our program from unexpected type conversion.