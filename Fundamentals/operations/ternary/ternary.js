{
    let num1 = 5;
    let num2 = 10;
    let ternaryResult = (num1 < num2) ? num1 : num2;
    console.log("Ternary operation result (smaller of", num1, "and", num2, ") is:", ternaryResult);

    let points = 85;
    let type  = (points >= 50) ? "Gold" : "Silver";
    console.log("Ternary operation result (type based on points", points, ") is:", type);

    let age = 20;
    let canVote = (age >= 18) ? "Yes" : "No";
    console.log("Ternary operation result (can vote if age is", age, ") is:", canVote);

    let temperature = 30;
    let weather = (temperature > 25) ? "Hot" : "Cold";
    console.log("Ternary operation result (weather based on temperature", temperature, ") is:", weather);

    let score = 45;
    let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : (score >= 70) ? "C" : (score >= 60) ? "D" : "F";
    console.log("Ternary operation result (grade based on score", score, ") is:", grade);

    
}