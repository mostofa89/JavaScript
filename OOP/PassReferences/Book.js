class Book {
    
    constructor(title, pages, genre = "Fiction") {
        this.title = title;
        this.pages = pages;
        this.genre = genre;
    }


    printDetails() {
        console.log(`${this.title}: ${this.pages} pages, Genre: ${this.genre}`);
    }


    merge(...books) {
        for (let b of books) {
            this.pages += b.pages;
            if (b.genre !== this.genre) {
                this.genre = "MixedGenre";
            }
        }
    }
}


// Driver Code
const book1 = new Book("Harry Potter", 500, "Fantasy");
const book2 = new Book("Sherlock Holmes", 300, "Mystery");
const book3 = new Book("The Hobbit", 350, "Fantasy");

console.log("---- Before Merge ----");
book1.printDetails();
book2.printDetails();
book3.printDetails();

console.log("\n---- Merging book2 and book3 into book1 ----");
book1.merge(book2, book3);

console.log("\n---- After Merge ----");
book1.printDetails();
