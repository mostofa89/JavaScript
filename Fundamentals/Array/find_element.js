{
    let nums = [1, 2, 3, 4, 5];
    let found = nums.includes(3);
    console.log(found); // true

    let notFound = nums.includes(6);
    console.log(notFound); // false

    let letters = ["a", "b", "c", "d"];
    let hasB = letters.includes("b");
    console.log(hasB); // true

    let hasZ = letters.includes("z");
    console.log(hasZ); // false

    let mixed = [1, "two", true, null];
    let hasTrue = mixed.includes(true);
    console.log(hasTrue); // true

    let hasUndefined = mixed.includes(undefined);
    console.log(hasUndefined); // false

}