function isprime(n){
  if(n=>0)
    for(let i=2;i<=n-1;i++){
      remainder(n,i);
    }
  }

isprime(22)

function remainder(n,i){
  if(n-(Math.floor(n/i))*i+i-i===0){
    console.log(n+' divisible by a number')
    return false;
  }
  else{
    console.log(n+' is a prime')
  }
}

