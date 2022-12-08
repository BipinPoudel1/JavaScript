//Example of default argument
function power(base, exponent=2){
      let result=1;
      for(let i=1; i<=exponent; i++){
            result*=base;
      }
      console.log(result);
}

power(2);
power(2, 6);