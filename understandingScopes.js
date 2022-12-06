//Understanding how global and local scopes work

let half=function(n){
      return n/2;
}

let n=10;

console.log(half(10));  //5
console.log(n+20);      //30



/*
 here, two bindings of same name are present.i.e. 'n'. But when function is called, it didn't interfere with another n, which is present outside the function definition. So, we can understand that even if two bindings of same name are present (one is local and another is global), local doesn't interfere with global.
*/