{
    let arr = [1, 2, 3];
    arr.pop();
    console.log(arr); // [1, 2]
    
    let letters = ["a", "b", "c"];
    letters.pop();
    console.log(letters); // ["a", "b"]

    let mixed = [1, "two", true];
    mixed.pop();
    console.log(mixed); // [1, "two"]

    let moreMixed = [false, "five", 6];
    moreMixed.pop(1);
    console.log(moreMixed); // [false, 6]
}