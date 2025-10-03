{
    let num1 = 5;
    let num2 = 10;
    
    console.log("Bitwise NOT of", num1, "is:", ~num1);
    console.log("Bitwise NOT of", num2, "is:", ~num2);

    let a = 1; // In binary: 0001
    let b = 2; // In binary: 0010
    console.log("Bitwise NOT of", a, "is:", ~a); // Output: -2 (In binary: 1110)
    console.log("Bitwise NOT of", b, "is:", ~b); // Output: -3 (In binary: 1101)

    let str = "Hello";
    console.log("Bitwise NOT of string 'Hello' is:", ~str); // Output: -1

    let boolTrue = true;
    let boolFalse = false;
    console.log("Bitwise NOT of true is:", ~boolTrue);
    console.log("Bitwise NOT of false is:", ~boolFalse);

    let floatNum = 5.7;
    console.log("Bitwise NOT of float 5.7 is:", ~floatNum); // Output: -6
    
}