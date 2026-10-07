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

    set available(value: number) {
        this._available = value;
    }

    // buy(product: Product): void {
    //     this.available = this.available - 1
    // }

    buy(): boolean {
        if (this._available <= 0) {
            return false;
        }

        this.available = this._available - 1;
        return true;
    }
}