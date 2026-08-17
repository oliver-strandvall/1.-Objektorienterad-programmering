class Product {
    name: string = "";
    price: number = 0;
    stockQuantity: number = 0;
    inStock: boolean = false;
}

const monitor = new Product();
monitor.name = "46 Inch OLED Display";
monitor.price = 349.99;
monitor.stockQuantity = 15;
monitor.inStock = true;

const headset = new Product();
headset.name = "High Definition Audio Headset";
headset.price = 89.99;
headset.stockQuantity = 6;
headset.inStock = true;

const RAM = new Product();
RAM.name = "16GB DDR5 RAM";
RAM.price = 184.95;
RAM.stockQuantity = 0;
RAM.inStock = false;

console.log("Produkt: " + monitor.name);
console.log("Pris: " + monitor.price + "€");
console.log("I lager: " + monitor.stockQuantity);
console.log("På lager: " + monitor.inStock);

console.log("Produkt: " + headset.name);
console.log("Pris: " + headset.price + "€");
console.log("I lager: " + headset.stockQuantity);
console.log("På lager: " + headset.inStock);

console.log("Produkt: " + RAM.name);
console.log("Pris: " + RAM.price + "€");
console.log("I lager: " + RAM.stockQuantity);
console.log("På lager: " + RAM.inStock);