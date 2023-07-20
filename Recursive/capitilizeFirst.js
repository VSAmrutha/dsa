function capitalizeFirst(arr, newArr = []) {
    if (arr.length === 0) {
        return newArr;
    }
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    return capitalizeFirst(arr.slice(1), newArr);
}
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']