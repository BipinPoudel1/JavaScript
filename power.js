//Recursive function to calculate power of given base
function power(base, exponent){
	if(exponent==0){
		return 1;
	}else{
		return base*power(base, exponent-1);
	}
}

console.log(power(3, 3));