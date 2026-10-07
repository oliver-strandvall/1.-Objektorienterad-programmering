import Product from "./product.ts";
import Members from "./members.ts";
import ShoppingCart from "./shopping-cart.ts";
import WebShop from "./web-shop.ts";
import Orders from "./orders.ts";

async function main() {
    const users = [new Members(1, "Test")];
    const products = [new Product(1, "Test", 25, 10)];
    const webShop = new WebShop(products, users);
    const shoppingCart = new ShoppingCart();
    const orders = new Orders();
    webShop.addToCart(1, 1);
    shoppingCart.showProducts();
    webShop.buyProduct(1, 1);
    orders.showOrders();
}

main();