const func=(function(a){
    //output will be 5, as delete 
    //keyword is used to delete key/value in object
    delete a;
    console.log(a)
})(5)
console.log(func)