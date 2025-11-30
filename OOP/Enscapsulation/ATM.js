class ATM {
    #balance;
    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }


    deposit(amount, pin) {
        if (!this.VarrifyPin(pin)) {
            return `Incorrect PIN. Deposit failed.`;

        }else{
            if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount.toFixed(2)}`);

            } else {
                console.log("Deposit amount must be positive.");

            }
        }
        
    }


    VarrifyPin(pin) {
        const correctPin = "1234";
        if (pin === correctPin) {
            return true;

        } else {
            console.log("Incorrect PIN. Access denied.");
            return false;

        }
    }


    getBalance(pin) {
        if (this.VarrifyPin(pin)) {
            return this.#balance;
        }
    }



    withdraw(amount, pin) {
        if (!this.VarrifyPin(pin)) {
            return `Incorrect PIN. Withdrawal failed.`;

        }else{
            if (amount > this.#balance) {
                return 'Insufficient funds.';

            } else if (amount > 0) {
                this.#balance -= amount;
                return `Withdrawn: $${amount.toFixed(2)}`;

            } else {
                return "Withdrawal amount must be positive.";

            }
        }
        
    }


}


// Example usage:
console.log("=========================");
let atm = new ATM(1000);
atm.deposit(500, "1234");
console.log(`Current balance: $${atm.getBalance("1234")}`);
atm.withdraw(200, "1234");
console.log(`Current balance: $${atm.getBalance("1234")}`);
console.log("=========================");