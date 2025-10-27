{
    let nums = [10, 20, 30, 40, 50];
    let numsSlice = nums.slice(1, 4);
    console.log(numsSlice); // [20, 30, 40]

    let letters = ["a", "b", "c", "d", "e"];
    let lettersSlice = letters.slice(2);
    console.log(lettersSlice); // ["c", "d", "e"]

    let mixed = [1, "two", true, null, undefined];
    let mixedSlice = mixed.slice(0, 3);
    console.log(mixedSlice); // [1, "two", true]

    let moreMixed = [false, "five", 6, 7.8, "nine"];
    let moreMixedSlice = moreMixed.slice(3);
    console.log(moreMixedSlice); // [7.8, "nine"]

}