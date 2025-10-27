{
    let nums1 = [1, 2, 3];
    let nums2 = [4, 5, 6];
    let combined = nums1.concat(nums2);
    console.log(combined);

    let letters1 = ["a", "b", "c"];
    let letters2 = ["d", "e", "f"];
    let allLetters = letters1.concat(letters2);
    console.log(allLetters);

    let mixed1 = [1, "two", true];
    let mixed2 = ["three", 4, false];
    let allMixed = mixed1.concat(mixed2);
    console.log(allMixed);

    console.log(nums1 + nums2); // Using + operator

}