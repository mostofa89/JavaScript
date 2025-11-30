let text = "Hello, World!";
let number = 42;
let floatNum = 3.14159;
let booleanValue = true;
let array = [1, 2, 3];
let object = { key: "value" };

console.log(`String: ${text}`);
console.log(`Integer: ${number}`);
console.log(`Float: ${floatNum.toFixed(2)}`);
console.log(`Boolean: ${booleanValue}`);
console.log(`Array: ${array.join(", ")}`);
console.log(`Object: ${JSON.stringify(object)}`);

console.log(`String: ${text}, number: ${number}, float: ${floatNum.toFixed(2)}, boolean: ${booleanValue}, array: [${array.join(", ")}], object: ${JSON.stringify(object)}`);