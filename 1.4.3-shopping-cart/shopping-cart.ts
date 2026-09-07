import Product from "./product.ts";

export default class shoppingCart {
    private _products: Product[] = [];

    constructor() {
        this._products = [];
    }

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product): void {
        this._products.push(product);
    }

    showProducts(): void {
        console.log("--- Shopping Cart ---");
        this._products.forEach(product => {
            console.log(product.name + " - " + product.price + " €");
        });
    }

    getTotalPrice(): number  {
        let totalPrice = 0;
        for(let i = 0; i < this._products.length; i++) {
            totalPrice += this._products[i].price;
        }
        console.log("Total Price: " + totalPrice.toFixed(2) + " €");
        return totalPrice;
    }

    removeProduct(name: string): void {
        this._products.forEach((product, index) => {
            if(product.name === name) {
                this._products.splice(index, 1);
            }
        });
    }
}