import Product from "./product.ts";
import Members from "./members.ts";
import ShoppingCart from "./shopping-cart.ts";

export default class WebShop {
    private _products: Product[] = [];
    private _members: Members[] = [];
    private _shoppingCart: ShoppingCart = new ShoppingCart();

    constructor(products: Product[], members: Members[]) {
        this._products = products;
        this._members = members;
    }

    get products(): Product[] {
        return this._products;
    }

    get members(): Members[] {
        return this._members;
    }

    get shoppingCart(): ShoppingCart {
        return this._shoppingCart;
    }

    findProduct(id: number): Product | undefined {
        return this._products.find((product) => product.id === id);
    }

    findMember(id: number): Members | undefined {
        return this._members.find((member) => member.id === id);
    }

    addToCart(memberId: number, productId: number): void {
        if(!memberId && !productId) {
            console.log("Invalid Member or Product Id");
        } else {
            const member = this.findMember(memberId);
            const product = this.findProduct(productId);
            if(member && product) {
                // this.shoppingCart.push(product);
                this._shoppingCart.addProduct(product);
            } else {
                console.log("Invalid Member or Product Id");
            }
        }
    }

    buyProduct(memberId: number, productId: number): void {
        if(!memberId && !productId) {
            console.log("Invalid Member or Product Id");
        } else {
            const member = this.findMember(memberId);
            const product = this.findProduct(productId);
            if(member && product) {
                member.buy(product);
            } else {
                console.log("Invalid Member or Product Id");
            }
        }
    }

    addProduct(product: Product) : void {

    }

    addMember(member: Members) : void {

    }

    showProducts() : void {
        this.products.forEach(product => {
            console.log(product);
        });
    }

    showMembers() : void {
        this.members.forEach(member => {
            console.log(member);
        });
    }
}