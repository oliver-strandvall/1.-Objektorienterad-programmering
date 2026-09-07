import customer from "./customer.ts";
import shoppingCart from "./shopping-cart.ts";
import product from "./product.ts";

const customer1 = new customer("Mike");

const product1 = new product("Computer Mouse", 12.95);
const product2 = new product("Headphones", 15.95);
const product3 = new product("Keyboard", 49.95);
const product4 = new product("1kg Candy", 4.95);
const product5 = new product("USB Stick", 9.95);

const shoppingCart1 = new shoppingCart();

shoppingCart1.addProduct(product1);
shoppingCart1.addProduct(product2);
shoppingCart1.addProduct(product3);
shoppingCart1.addProduct(product4);
shoppingCart1.addProduct(product5);
shoppingCart1.removeProduct("1kg Candy");
shoppingCart1.showProducts();
shoppingCart1.getTotalPrice();