import Product from "./product.ts";
import Orders from "./orders.ts";

export default class Members {
    private _id: number;
    private _name: string;
    private _orders: Orders;
    private _placedOrders: Product[] = [];

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
        this._orders = new Orders();
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get placedOrders(): Product[] {
        return this._orders.orders;
    }

    // buy(product: Product) {
    //     product.buy(product);
    //     orders.buy(product);
    //     this.placedOrders.push(product);
    // }

    buy(product: Product): void {
        if (product.buy()) {
            this._orders.buy(product);
        } else {
            console.log("Product is out of stock");
        }
    }

    showBoughtProducts() : void {
        this.placedOrders.forEach(order => {
            console.log(order);
        });
    }
}