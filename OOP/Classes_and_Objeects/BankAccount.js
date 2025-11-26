class BankAccount {
    constructor(username, account_type){
        this.username = username;
        this.account_type = account_type;
        this.balance = 0;


    }

}



// Driveer Code
console.log("=====================================")
let account1 = new BankAccount("Bilbo", "Savings");
console.log(`Username : ${account1.username}`);
console.log(`Account Type : ${account1.account_type}`);
console.log(`Initial Balance : $${account1.balance}`);
console.log("=====================================")

let account2 = new BankAccount("Frodo", "Checking");
console.log(`Username : ${account2.username}`);
console.log(`Account Type : ${account2.account_type}`);
console.log(`Initial Balance : $${account2.balance}`);
console.log("=====================================")

let account3 = new BankAccount("Gandalf", "Business");
console.log(`Username : ${account3.username}`);
console.log(`Account Type : ${account3.account_type}`);
console.log(`Initial Balance : $${account3.balance}`);
console.log("=====================================")

account1.balance = 500;
console.log(`Updated Balance for ${account1.username} : $${account1.balance}`);
console.log("=====================================")
account2.balance = 1000
console.log(`Updated Balance for ${account2.username} : $${account2.balance}`);
console.log("=====================================")