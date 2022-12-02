let num=Number(prompt("Give any number"));
if(!Number.isNaN(num)){
	document.write("Your number is the square root of " + num**2);
}else{
	document.write("Your input is not a valid number.");
}