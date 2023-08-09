function solve(arr, rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations; i++){
      let element = arr.pop();
      console.log("element",element)
      arr.unshift(element);
      console.log("arr",arr)
    }
    return arr;
   }
  console.log(  solve([44, 1, 22, 111], 5));