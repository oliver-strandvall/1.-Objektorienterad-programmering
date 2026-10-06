import Product from "./product.ts";
import Members from "./members.ts";

export default class WebShop {
    private _products: Product[] = [];
    private _members: Members[] = [];

    constructor(products: Product[] = [], members: Members[] = []) {
        this._products = products;
        this._members = members;
    }

    get products(): Product[] {
        return this._products;
    }

    get members(): Members[] {
        return this._members;
    }

    buyProduct(memberId: number, productId: number): void {

    }

    addProduct(product: Product) : void {

    }

    addMember(member: Members) : void {

    }

    showProducts() : void {

    }

    showMembers() : void {

    }
}