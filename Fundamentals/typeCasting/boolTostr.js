{   
    // Explicit type casting from boolean to string
    let flag = true;
    let str1 = String(flag);
    console.log("The Value of str11 is:", str1); // Output: "true"
    console.log("The Type of str1 is:", typeof str1); // Output: "string" 


    // Implicit type casting during concatenation
    let flag2 = false;
    let str2 = "The value is: " + flag2; 
    console.log("The Value of str2 is:", str2); // Output: "The value is: false"
    console.log("The Type of str2 is:", typeof str2); // Output: "string"

    let str3 = "Boolean value: " + flag;
    console.log("The Value of str3 is:", str3); // Output: "Boolean value: true"
    console.log("The Type of str3 is:", typeof str3); // Output: "string"

    
}