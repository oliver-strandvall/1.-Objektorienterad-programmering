import Processor from "./processor.ts";

export default class Computer {
    brand: string = "";
    model: string = "";
    processor: Processor ;

    constructor(brand: string, model: string, processor: Processor) {
        this.brand = brand;
        this.model = model;
        this.processor = processor
    }

    showInfo(): void {
        console.log("Computer brand: " + this.brand);
        console.log("Computer model: " + this.model);
        console.log("Processor brand: " + this.processor.cpubrand);
        console.log("Processor model: " + this.processor.cpumodel);
        console.log("Processor cores: " + this.processor.cores);
        console.log("Processor speed: " + this.processor.speed);
    }
}