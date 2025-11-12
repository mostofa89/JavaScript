function findMax(arr) {
    let max_num = arr[0];
    for (let num of arr){
        if (num > max_num){
            max_num = num;
        }
    }

    return max_num;
}


let maximum = findMax([3, 5, 7, 2, 8]);
console.log("Maximum number is: " + maximum); // Output: Maximum number is: 8