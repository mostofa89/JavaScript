{
    let num1 = 5;
    let flag = true;

    console.log("Truthy value of", num1, "is:", !!num1); // Output: true
    console.log("Truthy value of", flag, "is:", !!flag); // Output: true

    flag = false;
    console.log("Truthy value of", flag, "is:", !!flag); // Output: false

    let str = "Hello";
    console.log("Truthy value of string 'Hello' is:", !!str); // Output: true

    let emptyStr = "";
    console.log("Truthy value of empty string is:", !!emptyStr); // Output: false

    let arr = [1, 2, 3];
    console.log("Truthy value of array [1, 2, 3] is:", !!arr); // Output: true

    let emptyArr = [];
    console.log("Truthy value of empty array is:", !!emptyArr); // Output: true

    let obj = { key: "value" };
    console.log("Truthy value of object { key: 'value' } is:", !!obj); // Output: true


    let emptyObj = {};
    console.log("Truthy value of empty object is:", !!emptyObj); // Output: true

    let undef;
    console.log("Truthy value of undefined is:", !!undef); // Output: false
}