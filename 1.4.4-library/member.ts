import book from "./book.ts";

export default class member {
    private _id: number;
    private _name: string;
    private _borrowedBooks: book[] = [];

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    borrowBook(book: book): void {
        console.log(book.available);
        if(book.available) {
            // book.borrow();
            this._borrowedBooks.push(book);
            console.log("Successfully Borrowed Book");
        } else {
            console.log("Book Unavailable")
        }
    }

    returnBook(book: book): void {
        if(!book.available) {
            this._borrowedBooks.forEach((borrowedBook, index) => {
                if (borrowedBook.title === book.title) {
                    // borrowedBook.returnBook();
                    this._borrowedBooks.splice(index, 1);
                }
            });
            console.log("Successfully Returned Book");
        } else {
            console.log("Book is Already Available")
        }
    }

    showBorrowedBooks(): void {
        if(this._borrowedBooks.length <= 0) {
            console.log("Your Borrowed Books will be displayed here");
        } else {
            console.log("--- Borrowed Books ---");
            this._borrowedBooks.forEach((book) => {
                console.log("Title: " + book.title + " - Author: " + book.author);
            });
        }
    }
}