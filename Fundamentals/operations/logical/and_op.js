{
    let num1 = 5;
    let num2 = 10;
    let is_a_true = (num1 < num2) && (num1 !== num2);
    console.log("Is num1 less than and not equal to num2?", is_a_true);

    let a = 4.5;
    let b = 4.5;
    let is_b_true = (a <= b) && (a === b);
    console.log("Is a less than or equal to and equal to b?", is_b_true);

    let str1 = "hello";
    let str2 = "hello";
    let is_str_true = (str1 <= str2) && (str1 === str2);
    console.log("Is str1 less than or equal to and equal to str2?", is_str_true);

    let char1 = 'A';
    let char2 = 'a';
    let is_char_true = (char1 < char2) && (char1 !== char2);
    console.log("Is char1 less than and not equal to char2?", is_char_true);

    let bool1 = true;
    let bool2 = false;
    let is_bool_true = (bool1 === bool2) && (bool1 !== bool2);
    console.log("Is bool1 equal to and not equal to bool2?", is_bool_true);

    let num3 = 5;
    let str3 = "5";
    let is_mixed_true = (num3 <= str3) && (num3 == str3);
    console.log("Is num3 less than or equal to and equal to str3?", is_mixed_true);
}