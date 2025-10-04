{
    //Explicit type casting from number to string
    num1 = 123;
    let str1 = String(num1);
    console.log("The Type of str1 is:", typeof str1); // Output: "string"

    let num3 = 789.008;
    let str3 = num3.toString(); // Using toString() method
    console.log("The Type of str3 is:", typeof str3); // Output: "string"

    //Implicit type casting from number to string
    num2 = 456;
    let str2 = num2 + ""; // Concatenation with an empty string
    console.log("The Type of str2 is:", typeof str2); // Output: "string"

    let num4 = 321.654;
    str4 = num4 + "";
    console.log("The Type of str4 is:", typeof str4); // Output: "string"
     

}