let person = {
    name: "Mostofa Kamal",
    age: 23,
    address : {
        country : "Bangladesh",
        city : "Dhaka",
        postalCode : "1216"
    }
};

console.log("Name: " + person.name);
console.log("Address: " + person.address);
console.log("City: " + person.address.city);
console.log("Postal Code: " + person.address.postalCode);

console.log("Age: " + person["age"]);