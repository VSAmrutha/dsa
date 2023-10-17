function curry(func){
    return function curriedFunc(...args){
       if(args.length>=func.length){
        return func(...args)
      }else{
      return function(...next){
        return curriedFunc(...args,...next)
      }
    }
    }
  }
  const sumfunc=(a,b,c,d)=>a+b+c+d;
  const totalSum=curry(sumfunc)
  totalSum(1)(2)(3)(4)