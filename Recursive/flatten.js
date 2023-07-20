const flatten = (arr, vector=[]) => {
    if(arr.length === 0) return vector;
    if(typeof arr[0] === 'object') flatten(arr[0], vector);
    if(typeof arr[0] === 'number') vector.push(arr[0]);
    
    return flatten( arr.splice(1, arr.length), vector );
};