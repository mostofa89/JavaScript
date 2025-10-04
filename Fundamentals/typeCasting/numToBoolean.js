{
    // Explicit type casting from number to boolean
    let num1 = 5;
    let bool1 = Boolean(num1);
    console.log("The Value of bool1 is:", bool1); // Output: true
    console.log("The Type of bool1 is:", typeof bool1); // Output: "boolean"

    // Implicit type casting in logical context
    let num2 = 0;
    let bool2 = !num2;
    console.log("The Value of bool2 is:", bool2);
    console.log("The Type of bool2 is:", typeof bool2); // Output: "boolean"

    let bool3 = !(!num2);
    console.log("The Value of bool3 is:", bool3);
    console.log("The Type of bool3 is:", typeof bool3); // Output: "boolean"
}