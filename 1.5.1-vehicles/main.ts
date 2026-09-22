import Car from "./car.ts";
import Motorcycle from "./motorcycle.ts";

async function main() {
    const car = new Car("Porche", "911");
    const motorcycle = new Motorcycle("Honda", "Goldwing");

    console.log("Car Brand: " + car._brand);
    console.log("Car Model: " + car._model);
    car.start();
    car.honk();

    console.log("Motorcycle Brand: " + motorcycle._brand);
    console.log("Motorcycle Model: " + motorcycle._model);
    motorcycle.start();
    motorcycle.wheelie();
}

main();