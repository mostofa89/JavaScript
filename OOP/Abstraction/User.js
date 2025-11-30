class User {
    #password;  // Private field
    
    constructor(username, password) {
        this.username = username;
        this.#password = this.#hashPassword(password);

    }
    

    // Private method
    #hashPassword(password) {
        return password.split('').reverse().join(''); 

    }
    
    // Public method
    verifyPassword(password) {
        return this.#hashPassword(password) === this.#password;

    }

}

// Example usage:
const user = new User('john', 'secret123');
console.log(user.username);              // john
console.log(user.verifyPassword('secret123'));  // true
// console.log(user.#password);          // SyntaxError: Private field