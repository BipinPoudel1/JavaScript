//To calculate the power of given base

const power=function(base, exponent){
      let result=1;
      for(let i=1; i<=exponent; i++){
            result=result*base;
      }
      console.log(result);
}

power(2, 10);