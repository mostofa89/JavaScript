{
    let num1 = 5;
    let num2 = 10;
    let num1NotEqual = !(num1 === num2);
    console.log("Is num1 not equal to num2?", num1NotEqual);

    let a = 4.5;
    let b = 4.5;
    let aNotEqual = !(a === b);
    console.log("Is a not equal to b?", aNotEqual);

    let str1 = "hello";
    let str2 = "hello";
    let strNotEqual = !(str1 === str2);
    console.log("Is str1 not equal to str2?", strNotEqual);

    let char1 = 'A';
    let char2 = 'a';
    let charNotEqual = !(char1 === char2);
    console.log("Is char1 not equal to char2?", charNotEqual);

    let bool1 = true;
    let bool2 = false;
    let boolNotEqual = !(bool1 === bool2);
    console.log("Is bool1 not equal to bool2?", boolNotEqual);

    let num3 = 5;
    let str3 = "5";
    let mixedNotEqual = !(num3 === str3);
    console.log("Is num3 not equal to str3?", mixedNotEqual);

}