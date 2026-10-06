import Product from "./product.ts";

export default class ShoppingCart {
    private _shoppingCart: Product[] = [];
    private _totalPrice: number;

    constructor(shoppingCart: Product[], totalPrice: number) {
        this._shoppingCart = shoppingCart;
        this._totalPrice = totalPrice;
    }

    get shoppingCart(): Product[] {
        return this._shoppingCart;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    addProduct(product: Product) {
        this.shoppingCart.push(product)
    }

    calculateTotal(): void {

    }
}