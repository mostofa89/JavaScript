{   
    // Explicit type casting from string to number
    let str1 = "123";
    let num1 = Number(str1); // Explicit type casting from string to number
    console.log("The Type of num1 is:", typeof num1); // Output: "number"

    let str2 = "456.789";
    let num2 = parseFloat(str2); // Using parseFloat() for decimal numbers
    console.log("The Type of num2 is:", typeof num2); // Output: "number"


    // Implicit type casting from string to number
    let str4 = "200";
    let num4 = str4 * 1; // Multiplication forces type conversion
    console.log("The Type of num4 is:", typeof num4); // Output: "number"

    let str3 = "100";
    let num3 = +str3; // Using unary plus operator
    console.log("The Type of num3 is:", typeof num3); // Output: "number"

    let str5 = "100";
    let num5 = -str5; // Using unary plus operator
    console.log("The Value of num5 is:", num5); // Output: -100
    console.log("The Type of num5 is:", typeof num5); // Output: "number"
}