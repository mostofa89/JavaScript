let person = {
    name: "Mostofa Kamal",
    age: 23,
    address : {
        country : "Bangladesh",
        city : "Dhaka",
        postalCode : "1216"
    }
};

console.log(person);

person.email = "mostofa.kamal@example.com";
person.address.street = "123 Main St";
person["phone"] = "+880123456789";
person.address["Police Station"] = "Dhanmondi";

console.log(person);