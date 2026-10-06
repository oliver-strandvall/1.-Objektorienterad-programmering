import Product from "./product.ts";

export default class Members {
    private _id: number;
    private _name: string;
    private _placedOrders: Product[] = [];

    constructor(id: number, name: string, placedOrders: Product[]) {
        this._id = id;
        this._name = name;
        this._placedOrders = placedOrders;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get placedOrders(): Product[] {
        return this._placedOrders;
    }

    buy(product: Product) {
        this.placedOrders.push(product);
    }

    showBoughtProducts() : void {

    }
}