// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


function power(base,exponent){
    console.log(base, exponent)
    if(exponent==0) return 1;
    if(exponent<=1) return base;
    return base * power(base, exponent-1)
}
power(4,4)