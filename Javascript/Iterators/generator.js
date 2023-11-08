function * gen(){
    start=0;
    end=10;
    while(start<end){
        start++;
        yield start
    }
}
let loop=gen()
console.log(loop.next())
for(let i of loop){
    console.log(i)
}