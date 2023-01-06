console.log("Exercise 1");

let i, j;

for(i=1; i<=7; i++){
      for(j=1; j<=i; j++){
            process.stdout.write("$ ");
      }
      process.stdout.write("\n");
}

/*
      Here, process.stdout.write is alternative for console.log or document.write. Those things print the each iteration in new line where program like this (pattern) becomes very non- interactive. So, to print more iterations on the same line, we use process.stdout.write.
*/