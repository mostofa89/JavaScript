{
    let nums = [10, 20, 30, 40, 50];
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }

    for (let num of nums) {
        console.log(num);
    }

    let letters = ["a", "b", "c", "d", "e"];

    for (let letter of letters) {
        console.log(letter);
    }

    let mixed = [1, "two", true, null];

    for (let item of mixed) {
        console.log(item);
    }

    let emptyArray = [];
    for (let element of emptyArray) {
        console.log(element); // This will not log anything
    }

    let largeArray = Array(5).fill("item");
    for (let element of largeArray) {
        console.log(element);
    }

    console.log("Iteration complete");
}