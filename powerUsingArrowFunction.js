//Finding the any power of any number using arrow function

const power=(base, exp)=>{
      result=1;
      for(let i=1; i<=exp; i++){
            result*=base;
      }
      return result;
}

console.log(power(2, 10));