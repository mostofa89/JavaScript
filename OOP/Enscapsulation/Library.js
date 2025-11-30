class Library {
    #name;
    #availableBooks;
    #borrowedBookInfo;

    constructor(name, availableBooks) {
        this.#name = name;
        this.#availableBooks = availableBooks;
        this.#borrowedBookInfo = {};
    }

    setBorrowerInfo(name, books) {
        this.#borrowedBookInfo[name] = books;
    }

    getBooks() {
        return this.#availableBooks;
    }

    setBookQuantity(bookTitle) {
        this.#availableBooks[bookTitle] -= 1;
    }

    details() {
        console.log(`Library Name: ${this.#name}`);
        console.log("Available Books:");
        for (let bookTitle in this.#availableBooks) {
            console.log(`${bookTitle}: ${this.#availableBooks[bookTitle]}`);
        }
        console.log("Borrowed Book Info:");
        console.log(this.#borrowedBookInfo);
        console.log("----------------------------------------");
    }
}



class Reader {
    #name;
    #borrowedBooks;
    #totalBorrowed;

    constructor(name) {
        this.#name = name;
        this.#borrowedBooks = {};  // Store book counts
        this.#totalBorrowed = 0;
    }

    readerInfo(bookTitle) {
        console.log(`Reader Name: ${this.#name}`);
        console.log("Borrowed Books:");

        if (bookTitle) {
            const count = this.#borrowedBooks[bookTitle] || 0;
            console.log(`${bookTitle}: ${count}`);
        } else {
            for (let title in this.#borrowedBooks) {
                console.log(`${title}: ${this.#borrowedBooks[title]}`);
            }
        }

        console.log("----------------------------------------");
    }

    borrow(loc, ...books) {
        let available = loc.getBooks();

        for (let book of books) {
            if (this.#totalBorrowed >= 5) {
                console.log("You cannot borrow more than 5 books.");
                break;
            }

            if (!(book in available)) {
                console.log(`${book} does not exist in the library.`);
                continue;
            }

            if (available[book] === 0) {
                console.log(`${book} books are not available at the moment.`);
                continue;
            }

            // Borrow success
            if (!this.#borrowedBooks[book]) {
                this.#borrowedBooks[book] = 1;
            } else {
                this.#borrowedBooks[book] += 1;
            }

            this.#totalBorrowed += 1;
            loc.setBookQuantity(book);

            console.log(`${book} book is borrowed successfully.`);
        }

        loc.setBorrowerInfo(this.#name, this.#totalBorrowed);
    }

    getName() {
        return this.#name;
    }
}


// ------------------------
// Example usage
// ------------------------

const L1 = new Library("Dhaka", {
    Arts: 15,
    Fiction: 135,
    Politics: 2,
    Science: 11,
    Poetry: 15
});

L1.details();
console.log("1----------------------");

const r1 = new Reader("Aladdin");
r1.borrow(L1, "Arts", "Fiction", "Fiction", "Politics");
console.log("2----------------------");

r1.borrow(L1, "Politics", "Fiction");
console.log("3----------------------");

r1.readerInfo();
console.log("4----------------------");

r1.readerInfo("Fiction");
console.log("5----------------------");

L1.details();
console.log("6----------------------");

const r2 = new Reader("Jasmine");
r2.borrow(L1, "Politics", "Poetry");
console.log("7----------------------");

r2.readerInfo();
console.log("8----------------------");

L1.details();
