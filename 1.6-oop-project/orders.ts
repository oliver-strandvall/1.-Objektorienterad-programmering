import type Product from "./product.ts";

export default class Orders {
    private _orders: Product[] = [];

    get orders(): Product[] {
        return this._orders;
    }

    buy(product: Product) {
        this.orders.push(product);
    }

    showOrders() : void {
        this.orders.forEach(order => {
            console.log(order);
        });
    }
}