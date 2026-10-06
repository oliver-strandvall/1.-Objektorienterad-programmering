import { createInterface } from 'node:readline/promises';
import VehicleRegistry from './vehicle-registry.ts';
import Car from './car.ts';
import Truck from './truck.ts';
import Motorcycle from './motorcycle.ts';

async function main() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const vehicleRegistry = new VehicleRegistry();
    // const car1 = new Car("Brand", "Model", "ABC-123", 2020, 200, 1550, 8, 220);
    // vehicleRegistry.addVehicle(car1)

    for(let i = 1; i = 1;) {
        console.log("--- Vehicle Registry ---");
        console.log("1. Add Vehicle");
        console.log("2. Show All Vehicles");
        console.log("3. Find Vehicle");
        console.log("4. Exit");
        const menu = await rl.question("Choose a option: ");

        if(menu === "1") {
            console.log("What Type of Vehicle?");
            console.log("1. Car");
            console.log("2. Motorcycle");
            console.log("3. Truck");
            const vehicleType = await rl.question("Choose a Type: ");
            const vehicleBrand = await rl.question("Enter Vehicle Brand: ");
            const vehicleModel = await rl.question("Enter Vehicle Model: ");
            const vehicleRegisternumber = await rl.question("Enter Vehicle Registernumber: ");
            const vehicleYear = Number(await rl.question("Enter Vehicle Modelyear: "));
            const vehiclePower = Number(await rl.question("Enter Vehicle Horsepower: "));
            const vehicleWeight = Number(await rl.question("Enter Vehicle Weight: "));
            const vehicleFuelConsumption = Number(await rl.question("Enter Vehicle Average Fuel Consumption(L/100KM): "));

            if(vehicleType === "1") {
                const carTopSpeed = Number(await rl.question("Enter Car Top Speed: "));
                const newCar = new Car(vehicleBrand, vehicleModel, vehicleRegisternumber, vehicleYear, vehiclePower, vehicleWeight, vehicleFuelConsumption, carTopSpeed);
                vehicleRegistry.addVehicle(newCar);
            }

            if(vehicleType === "2") {
                const motorcycleEngineCapacity = Number(await rl.question("Enter Motorcycle Engine Capacity(CC): "));
                const newMotorcycle = new Motorcycle(vehicleBrand, vehicleModel, vehicleRegisternumber, vehicleYear, vehiclePower, vehicleWeight, vehicleFuelConsumption, motorcycleEngineCapacity);
                vehicleRegistry.addVehicle(newMotorcycle);
            }

            if(vehicleType === "3") {
                const truckEngineTorque = Number(await rl.question("Enter Truck Engine Torque: "));
                const newTruck = new Truck(vehicleBrand, vehicleModel, vehicleRegisternumber, vehicleYear, vehiclePower, vehicleWeight, vehicleFuelConsumption, truckEngineTorque);
                vehicleRegistry.addVehicle(newTruck);
            }
        }

        if(menu === "2") {
            vehicleRegistry.showVehicles();
        }

        if(menu === "3") {
            const registerNumber = await rl.question("Enter Vehicle Registernumber to Search: ");
            vehicleRegistry.searchVehicles(registerNumber);
        }

        if(menu === "4") {
            i == 0;
            console.log("You have logged out");
            return rl.close(); 
        }
    }
}

main();