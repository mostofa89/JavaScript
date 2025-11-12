function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calSum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += num;
    }

    return sum;
}


result = arraySum([1, 2, 3, 4, 5]);
console.log("Result: " + result); // Output: 15

total = arraySum([1, 2, 3, 4, 5]);
console.log("Result: " + total); // Output: 15