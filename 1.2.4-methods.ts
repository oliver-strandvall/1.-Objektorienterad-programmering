class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * this.width + 2 * this.height;
    }
}

const rectangle1 = new Rectangle(10, 5);
const rectangle2 = new Rectangle(4, 3);
const rectangle3 = new Rectangle(8, 4);

console.log("Rectangle 1")
console.log("Width: ", rectangle1.width);
console.log("Height: ", rectangle1.height);
console.log("Area:", rectangle1.calculateArea());
console.log("Perimeter:", rectangle1.calculatePerimeter());
console.log("Rectangle 2")
console.log("Width: ", rectangle2.width);
console.log("Height: ", rectangle2.height);
console.log("Area:", rectangle2.calculateArea());
console.log("Perimeter:", rectangle2.calculatePerimeter());
console.log("Rectangle 3")
console.log("Width: ", rectangle3.width);
console.log("Height: ", rectangle3.height);
console.log("Area:", rectangle3.calculateArea());
console.log("Perimeter:", rectangle3.calculatePerimeter());