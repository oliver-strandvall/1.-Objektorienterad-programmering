export default class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _available: number;

    constructor(id: number, name: string, price: number, available: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._available = available;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    get available(): number {
        return this._available;
    }

    buy(): void {

    }
}