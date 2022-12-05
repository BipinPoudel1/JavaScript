//contd.. of fizzBuzz.js
//Question
/*
      When you have that working, modify your program to print "FizzBuzz
" for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).

*/

for(let i=1; i<=100; i++){
      if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
      }else if(i%3==0){
            console.log("Fizz");
      }else if(i%5==0){
            console.log("Buzz");
      }else{
            console.log(i);
      }
}