import Vehicle from "./vehicle.ts"

export default class VehicleRegistry {

    vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle): void {
        this.vehicles.push(vehicle);
        console.log("Vehicle Added Succesfully");
    }

    showVehicles(): void {
        for (const vehicle of this.vehicles) {
            vehicle.getDescription();
        }
    }

    searchVehicles(registerNumber: string): void {
        for (const vehicle of this.vehicles) {
            if(vehicle.registerNumber === registerNumber) {
                vehicle.getDescription();
                return
            }
        }
        console.log(`No Vehicle With Registernumber ${registerNumber} Found`);
    }
}