//Infinte Currying
//sum(1)(2)(3).....(n)
//ex: sum(1)(2)//3
//sum(1)(2)(3)//6

function sum(a){
    return function(b){
      if(b) return sum(a+b);
      return a
    }
  }
  sum(5)(2)(6)(7)();
  