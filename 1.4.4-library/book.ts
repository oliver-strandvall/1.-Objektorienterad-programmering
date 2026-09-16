export default class book {
    private _id: number;
    private _title: string;
    private _author: string;
    private _available: boolean;

    constructor(id: number, title: string, author: string) {
        this._id = id;
        this._title = title;
        this._author = author;
        this._available = true;
    }

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get available(): boolean {
        return this._available;
    }

    borrow(book: book): void {
        book._available = false;
        console.log("Book Borrowed Succesfully");
    }

    returnBook(book: book): void {
        book._available = true;
        console.log("Book Returned Successfully");
    }
}