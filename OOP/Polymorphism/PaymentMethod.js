// Payment interface (conceptual)
class PaymentMethod {
    processPayment(amount) {
        throw new Error("processPayment must be implemented");

    }
    
    
    validatePayment() {
        throw new Error("validatePayment must be implemented");

    }

}


class CreditCard extends PaymentMethod {

    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;

    }
    

    processPayment(amount) {
        return `Processing $${amount} via Credit Card ending in ${this.cardNumber.slice(-4)}`;

    }

    
    validatePayment() {
        return this.cardNumber.length === 16;

    }

}

class PayPal extends PaymentMethod {

    constructor(email) {
        super();
        this.email = email;

    }
    

    processPayment(amount) {
        return `Processing $${amount} via PayPal account ${this.email}`;

    }
    

    validatePayment() {
        return this.email.includes('@');

    }

}

class Bitcoin extends PaymentMethod {

    constructor(walletAddress) {
        super();
        this.walletAddress = walletAddress;

    }
    

    processPayment(amount) {
        return `Processing $${amount} via Bitcoin wallet ${this.walletAddress.slice(0, 8)}...`;

    }
    
    validatePayment() {
        return this.walletAddress.length > 20;

    }
}

// Checkout function works with any payment method
class Checkout {

    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;

    }
    

    processOrder(amount) {
        if (this.paymentMethod.validatePayment()) {
            return this.paymentMethod.processPayment(amount);

        }
        return "Invalid payment method";

    }
}

const checkout1 = new Checkout(new CreditCard("1234567890123456"));
console.log(checkout1.processOrder(99.99));

const checkout2 = new Checkout(new PayPal("user@example.com"));
console.log(checkout2.processOrder(149.99));

const checkout3 = new Checkout(new Bitcoin("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"));
console.log(checkout3.processOrder(0.005));