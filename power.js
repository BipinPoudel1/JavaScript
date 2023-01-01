//Recursive function to calculate the given power of given number
function power(base, exponent){
	if(exponent==0){
		return 1;
	}else{
		return base*power(base, exponent-1);
	}
}
console.log(power(2, 1));
console.log(power(1, 1));
console.log(power(2, 5));