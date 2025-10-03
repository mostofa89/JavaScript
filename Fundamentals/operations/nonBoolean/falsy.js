{
    let num1 = 5;
    let flag = true;
    console.log("Falsy value of", num1, "is:", !num1); // Output: false
    console.log("Falsy value of", flag, "is:", !flag); // Output: false

    let num2 = 0;
    let str = "";
    console.log("Falsy value of", num2, "is:", !num2); // Output: true
    console.log("Falsy value of empty string is:", !str); // Output: true

    let undef;
    let n = null;
    console.log("Falsy value of undefined is:", !undef); // Output: true
    console.log("Falsy value of null is:", !n); // Output: true

    let nanValue = NaN;
    console.log("Falsy value of NaN is:", !nanValue); // Output: true

}