import Vehicle from "./vehicle.ts";

export default class Motorcycle extends Vehicle {
    wheelie(): void {
        console.log("Wheelie!")
    }
}