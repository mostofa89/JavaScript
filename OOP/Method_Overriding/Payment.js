// Parent class
class Payment {
    
    constructor(amount, description) {
        this.amount = amount;
        this.description = description;
        this.timestamp = new Date();
    }


    processPayment() {
        return `Processing payment of $${this.amount}`;

    }


    getReceipt() {
        return `Receipt\n-------\nAmount: $${this.amount}\nDescription: ${this.description}`;

    }


    validatePayment() {
        return this.amount > 0;

    }

}

// Child class 1 - CreditCardPayment
class CreditCardPayment extends Payment {

    constructor(amount, description, cardNumber, cvv) {
        super(amount, description);
        this.cardNumber = this.maskCardNumber(cardNumber);
        this.cvv = cvv;
        this.processingFee = amount * 0.03; // 3% fee

    }


    maskCardNumber(cardNumber) {
        return `****-****-****-${cardNumber.slice(-4)}`;

    }

    // Override processPayment
    processPayment() {
        if (!this.validatePayment()) {
            return "Payment validation failed!";

        }
        const totalAmount = this.amount + this.processingFee;
        return `Processing Credit Card payment\nCard: ${this.cardNumber}\nAmount: $${this.amount}\nProcessing Fee: $${this.processingFee.toFixed(2)}\nTotal: $${totalAmount.toFixed(2)}`;

    }


    // Override getReceipt
    getReceipt() {
        const baseReceipt = super.getReceipt();
        return `${baseReceipt}\nCard: ${this.cardNumber}\nProcessing Fee: $${this.processingFee.toFixed(2)}\nTotal Charged: $${(this.amount + this.processingFee).toFixed(2)}`;

    }


    // Override validatePayment
    validatePayment() {
        return super.validatePayment() && this.cvv.length === 3;

    }
}


// Child class 2 - PayPalPayment
class PayPalPayment extends Payment {

    constructor(amount, description, email) {
        super(amount, description);
        this.email = email;
        this.transactionFee = amount * 0.025; // 2.5% fee

    }

    // Override processPayment
    processPayment() {
        if (!this.validatePayment()) {
            return "Payment validation failed!";
        }
        return `Processing PayPal payment\nPayPal Email: ${this.email}\nAmount: $${this.amount}\nTransaction Fee: $${this.transactionFee.toFixed(2)}\nTotal: $${(this.amount + this.transactionFee).toFixed(2)}`;

    }


    // Override getReceipt
    getReceipt() {
        const baseReceipt = super.getReceipt();
        return `${baseReceipt}\nPayPal Account: ${this.email}\nTransaction Fee: $${this.transactionFee.toFixed(2)}\nTotal: $${(this.amount + this.transactionFee).toFixed(2)}`;

    }


    // Override validatePayment
    validatePayment() {
        return super.validatePayment() && this.email.includes('@');

    }

}

// Child class 3 - CryptocurrencyPayment
class CryptocurrencyPayment extends Payment {

    constructor(amount, description, walletAddress, cryptoType) {
        super(amount, description);
        this.walletAddress = walletAddress;
        this.cryptoType = cryptoType;
        this.networkFee = 2.5; // Fixed network fee

    }


    // Override processPayment
    processPayment() {
        if (!this.validatePayment()) {
            return "Payment validation failed!";

        }
        return `Processing ${this.cryptoType} payment\nWallet: ${this.walletAddress}\nAmount: $${this.amount} (in ${this.cryptoType})\nNetwork Fee: $${this.networkFee}\nTotal: $${(this.amount + this.networkFee).toFixed(2)}`;

    }


    // Override getReceipt
    getReceipt() {
        const baseReceipt = super.getReceipt();
        return `${baseReceipt}\nCrypto: ${this.cryptoType}\nWallet: ${this.walletAddress}\nNetwork Fee: $${this.networkFee}\nTotal: $${(this.amount + this.networkFee).toFixed(2)}`;

    }


    // Override validatePayment
    validatePayment() {
        return super.validatePayment() && this.walletAddress.length > 10;

    }

}


// Testing
console.log("=== Payment System with Method Overriding ===\n");

// Create different payment types
const creditCard = new CreditCardPayment(100, "Online Purchase", "1234567890123456", "123");
const paypal = new PayPalPayment(150, "Subscription", "user@example.com");
const crypto = new CryptocurrencyPayment(200, "Investment", "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", "Bitcoin");

// Process payments (overridden method)
console.log("--- Processing Payments ---\n");
console.log(creditCard.processPayment());
console.log("\n" + paypal.processPayment());
console.log("\n" + crypto.processPayment());

// Get receipts (overridden method)
console.log("\n\n--- Payment Receipts ---\n");
console.log(creditCard.getReceipt());
console.log("\n" + paypal.getReceipt());
console.log("\n" + crypto.getReceipt());

// Validate payments (overridden method)
console.log("\n\n--- Payment Validation ---");
console.log(`Credit Card Valid: ${creditCard.validatePayment()}`);
console.log(`PayPal Valid: ${paypal.validatePayment()}`);
console.log(`Crypto Valid: ${crypto.validatePayment()}`);