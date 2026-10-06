import type Product from "./product.ts";

export default class Orders {
    private _orders: Product[] = [];

    constructor(orders: Product[]) {
        this._orders = orders;
    }

    get orders(): Product[] {
        return this._orders;
    }

    buy(product: Product) {
        this.orders.push(product);
    }

    showOrders() : void {
        
    }
}