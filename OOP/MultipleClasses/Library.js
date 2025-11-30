class Book {

    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    
}



class Member {

    constructor(name, member_id ) {
        this.name = name;
        this.member_id = member_id;
        this.books_borrowed = [];

    }


    borrow (books) {
        for (let book of books) {
            this.books_borrowed.push(book);
        }

    }


    show_borrowed_books() {
        console.log("=========================");
        console.log(`Member Name: ${this.name}`);
        console.log(`Member ID: ${this.member_id}`);
        console.log(`Books Borrowed:`);
        for (let book of this.books_borrowed) {
            console.log("=========================");
            console.log(`- ${book.title} by ${book.author}`);
        }
        console.log("=========================");
    }


}



class Library {

    constructor(name) {
        this.name = name;
        this.books = [];
    }



    show_borrowed_booksdetails(members) {
        console.log("=========================");
        console.log(`Library Name: ${this.name}`);
        console.log(`Members:`);
        for (let member of members) {
            console.log("=========================");
            console.log(`Member Name: ${member.name}`);
            console.log(`Member ID: ${member.member_id}`);
            console.log(`Books Borrowed:`);
            for (let book of member.books_borrowed) {
                console.log(`- ${book.title} by ${book.author}`);
            }
        }
        console.log("=========================");
    }



    add_books(books) {
        for (let book of books) {
            this.books.push(book);

        }
        
    }
}


// Driver code
let member1 = new Member("John Doe", "M001");
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565");
let book2 = new Book("1984", "George Orwell", "9780451524935");
member1.borrow([book1, book2]);
member1.show_borrowed_books();
let member2 = new Member("Jane Smith", "M002");
member2.borrow([book1]);
member2.show_borrowed_books();
let library = new Library("City Library");
library.show_borrowed_booksdetails([member1, member2]);
library.add_books([book2, new Book("To Kill a Mockingbird", "Harper Lee", "9780446310789")]);
