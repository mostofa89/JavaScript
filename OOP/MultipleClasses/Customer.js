class Customer {

    constructor (name, account){
        this.name = name;
        this.account = account;

    }


    add_account(accounts){
        for (let account in accounts){
            this.account.push(account)

        }

    }


    show_accounts(){
        console.log("=========================");
        console.log(`Customer Name: ${this.name}`);
        console.log(`Accounts:`);
        console.log("=========================");
        for (let account of this.account){
            console.log(`- ${account}`);
        }
        console.log("=========================");
    }

}



class Account {

    constructor(account_number, balance){
        this.account_number = account_number;
        this.balance = balance;

    }


}



class Bank {

    constructor(name, customers){
        this.name = name;
        this.customers = customers;

    }


    show_customers_details(){
        console.log("=========================");
        console.log(`Bank Name: ${this.name}`);
        console.log(`Customers:`);

        for (let customer of this.customers){
            console.log("=========================");
            console.log(`Customer Name: ${customer.name}`);
            console.log(`Accounts:`);
            for (let account of customer.account){
                console.log(`- Account Number: ${account.account_number}, Balance: $${account.balance}`);
            }
            console.log("=========================");


        }

    }



    add_customer(customers){
        for (let customer of customers){
            this.customers.push(customer);
        }

    }


}



// Driver code
let account1 = new Account("123456789", 5000);
let account2 = new Account("987654321", 10000);
let customer1 = new Customer("John Doe", [account1, account2]);
let customer2 = new Customer("Jane Smith", [account1]);
let bank = new Bank("Global Bank", [customer1, customer2]);
let account3 = new Account("555555555", 7500);
customer2.add_account([account3]);
bank.add_customer([new Customer("Alice Johnson", [account2, account3])]);
bank.show_customers_details();