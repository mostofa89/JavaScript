let student = {
    name: "Mostofa Kamal",
    age: 23,
    address : {
        country : "Bangladesh",
        city : "Dhaka",
        postalCode : "1216"
    }
};


console.log(student.hasOwnProperty("name"));      // true
console.log(student.hasOwnProperty("email"));     // false
console.log(student.address.hasOwnProperty("city")); // true
console.log(student.address.hasOwnProperty("street")); // false