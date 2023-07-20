let n=parseInt(prompt('Enter a Number'))
console.log("hr")
let isPrime=true;
//you can reduce the number of iterations by half using n/2, works
for(let count=2;count<n;count++){
    if(n%count){ 
        isPrime=false
        break;
    }
}
if(isPrime){
    console.log(`${n} is a prime number`)
}else{
    console.log(`${n} is a prime number`)
}