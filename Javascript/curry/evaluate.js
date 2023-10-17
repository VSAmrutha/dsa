//evaluate("sum")(4)(2)=>6
//evaluate("multiply")(4)(2)=>8
//evaluate("divide")(4)(2)=>2
//evaluate("substract")(4)(2)=>2

//evaluate("sum")(4)(2)=>6
//evaluate("multiply")(4)(2)=>8
//evaluate("divide")(4)(2)=>2
//evaluate("substract")(4)(2)=>2

//evaluate("sum")(4)(2)=>6
//evaluate("multiply")(4)(2)=>8
//evaluate("divide")(4)(2)=>2
//evaluate("substract")(4)(2)=>2

function evaluate(type){
    return function(a){
        return function(b){
          switch(type){
              case "sum":
                      return a+b
              case "multiply":
                      return a*b
              case "divide":
                      return a/b
              case "substract":
                      return a-b  
              default: return "Invalid Operation"
            }
        }
      }
  }
  console.log(evaluate("sum")(4)(2))
  console.log(evaluate("multiply")(4)(2))
  console.log(evaluate("divide")(4)(2))
  console.log(evaluate("substract")(4)(2))
  console.log(evaluate("subtract")(4)(2))
  
