let hello = () => {
    console.log("Hello, World!");
}


hello(); // Output: Hello, World!


let square = (x) => {
    return x * x;
}


console.log(square(5)); // Output: 25
console.log(square(10)); // Output: 100


let add = (a, b) => a + b;
console.log(add(3, 7)); // Output: 10
console.log(add(15, 25)); // Output: 40

let factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;

    } else {
        return n * factorial(n - 1);
    }

}

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720



let fibonacci = (n) => {
    if (n <= 0){
        return 0;

    } else if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);


}

console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55