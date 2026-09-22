import Vehicle from "./vehicle.ts";

export default class Car extends Vehicle {
    honk(): void {
        console.log("Honk!")
    }
}