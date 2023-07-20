function itemInCommon(arr1,arr2){
    let obj={};
    for(let i=0;i<arr1.length;i++){
        obj[arr1[i]]=true
    }
    for(let i=0;i<arr2.length;i++){
        if(obj[arr2[i]]) return true
    }
    return false
}
let array1=[1,2,5]
let array2=[7,4,9]
itemInCommon(array1,array2) //O(N) instead of O(n2) for nested loops