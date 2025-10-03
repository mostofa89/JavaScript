// not check type while comparing
// returns true if values are equal, otherwise false
{
    let num1 = 5;
    let num2 = 10;
    console.log("Is num1 equal to num2?", num1 == num2);

    let a = 4.5;
    let b = 4.5;
    console.log("Is a equal to b?", a == b);

    let str1 = "hello";
    let str2 = "hello";
    console.log("Is str1 equal to str2?", str1 == str2);

    let char1 = 'A';
    let char2 = 'a';
    console.log("Is char1 equal to char2?", char1 == char2);

    let bool1 = true;
    let bool2 = false;
    console.log("Is bool1 equal to bool2?", bool1 == bool2);

    let num3 = 5;
    let str3 = "5";
    console.log("Is num3 equal to str3?", num3 == str3);
}