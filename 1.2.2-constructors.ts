class Product {
    name: string = "";
    price: number = 0;
    stockQuantity: number = 0;
    inStock: boolean = false;


    constructor(name: string, price: number, stockQuantity: number, inStock: boolean) {
        this.name = name;
        this.price = price;
        this.stockQuantity = stockQuantity;
        this.inStock = inStock;
    }
}


const monitor = new Product("46 Inch OLED Display", 349.99, 15, true);

const headset = new Product("High Definition Audio Headset", 89.99, 6, true);

const RAM = new Product("16GB DDR5 RAM", 184.95, 0, false);

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