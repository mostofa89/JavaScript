function calculator(a, b, operation) {
    if (operation === "+"){
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    } else if (operation === "%") {
        return a % b;
    } else {
        return "Invalid operation";

    }
}


console.log(calculator(10, 5, "+")); // Output: 15
console.log(calculator(10, 5, "-")); // Output: 5
console.log(calculator(10, 5, "*")); // Output: 50 
console.log(calculator(50, 5, "/"));// Output: 10
console.log(calculator(50, 5, "%")); // Output: 0