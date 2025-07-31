// const n=5
// const i=2
// let c=n/i
// console.log(c)
// console.log(Math.floor(c))
// console.log(n-c)
// console.log(22-(Math.floor(22/2))*2+2-2)



function remainder(n){
  let isPrime=true;
  for(let i=2;i<=n-1;i++){

    let result=n-((Math.floor(n/i)*i)+i-i)
    if(result===0){
      console.log("Not prime number")
      isPrime=false;
      break;
    }
  }
  
  if(isPrime){
    console.log("prime number")
  }
}
remainder(77)

