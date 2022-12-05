let n=8;
for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
            if((i+j)%2==0){
                  process.stdout.write(" ");
            }else{
                  process.stdout.write("#");
            }
      }
      process.stdout.write("\n");
}