{   
    // Explicit type casting from boolean to number
    let flag = true;
    let num1 = Number(flag); 
    console.log("The Value of num1 is:", num1); // Output: 1
    console.log("The Type of num1 is:", typeof num1); // Output: "number"

    // Implicit type casting during addition
    let flag2 = false;
    let num2 = num1 + flag2; 
    console.log("The Value of num2 is:", num2); // Output: 1
    console.log("The Type of num2 is:", typeof num2); // Output: "number"
}