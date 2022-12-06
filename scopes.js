//To understand the difference between var and let
//var has global scope where let has local scope.
let x=10;   //x can be accessed globally
if(true){
      let y=20;   //y is for this local scope only since y is declared with let
      var z=30;   //z can be accessed outside of this block also because it is declared with var.
      console.log(x+y+z);     //60
}

console.log(x+z);       //40, Also we cannot do as x+y+z or z+y or sth like that because y cannot be accessed outside of that local block because let declares y which has local scope.