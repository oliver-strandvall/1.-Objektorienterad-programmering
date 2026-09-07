import shoppingCart from "./shopping-cart.ts";

export default class customer {
    private _name: string;
    private _shoppingCart: shoppingCart;

    constructor(name: string) {
        this._name = name;
        this._shoppingCart = new shoppingCart();
    }

    get name(): string {
        return this._name;
    }

    get shoppingCart(): shoppingCart {
        return this._shoppingCart;
    }
}