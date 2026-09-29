import Vehicle from "./vehicle.ts";

export default class Truck extends Vehicle {
    _engineTorque: number

    constructor(brand: string, model: string , modelYear: number, horsePower: number, weight: number, avgFuelConsumption: number, engineTorque: number) {
        super(brand, model, modelYear, horsePower, weight, avgFuelConsumption);
        this._engineTorque = engineTorque
    }

    getDescription(): void {
        console.log(`Semi Truck Details:`);
        console.log(`
            Horsepower: ${this._horsePower}, Weight: ${this._weight},
            Average Fuel Consumption(L/100KM): ${this._avgFuelConsumption}, Engine Torque: ${this._engineTorque}
        `)
    }
}