{
    let nums = [10, 20, 30, 40, 50];
    console.log(nums.length); // 5

    let letters = ["a", "b", "c", "d", "e", "f"];
    console.log(letters.length); // 6


    let mixed = [1, "two", true, null, undefined];
    console.log(mixed.length); // 5

    let emptyArray = [];
    console.log(emptyArray.length); // 0

    let anotherEmptyArray = new Array();
    console.log(anotherEmptyArray.length); // 0

    let arrayWithHoles = [1, , 3];
    console.log(arrayWithHoles.length); // 3

    let largeArray = new Array(100);
    console.log(largeArray.length); // 100

    let anotherLargeArray = Array(100).fill(0);
    console.log(anotherLargeArray.length); // 100
}