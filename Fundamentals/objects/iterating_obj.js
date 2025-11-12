let student = {
    name: "Alice",
    age: 22,
    dept: "Computer Science",
    city : "Los Angeles"

}
console.log("Using for each:");
for (let key in student) {
    console.log(key + ": " + student[key]);
}

console.log("Using Object.keys():");
for (let key of Object.keys(student)) {
    console.log(key + ": " + student[key]);
}

console.log("Using values:");
for (let value of Object.values(student)) {
    console.log(value);
}


console.log("Using Object.entries():");
for (let [key, value] of Object.entries(student)) {
    console.log(key + ": " + value);
}