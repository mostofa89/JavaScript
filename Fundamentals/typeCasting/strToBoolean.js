{   
    // Explicit type casting from string to boolean
    let str1 = "true";
    let bool1 = Boolean(str1);
    console.log("The Value of bool1 is:", bool1);
    console.log("The Type of bool1 is:", typeof bool1); // Output: "boolean"

    let str2 = "false";
    let bool2 = Boolean(str2);
    console.log("The Value of bool2 is:", bool2);
    console.log("The Type of bool2 is:", typeof bool2); // Output: "boolean"

    // Implicit type casting in logical context
    let str3 = "";
    let bool3 = !str3;
    console.log("The Value of bool3 is:", bool3);
    console.log("The Type of bool3 is:", typeof bool3); // Output: "boolean"

    let bool4 = !(!str3);
    console.log("The Value of bool4 is:", bool4);
    console.log("The Type of bool4 is:", typeof bool4); // Output: "boolean"

}