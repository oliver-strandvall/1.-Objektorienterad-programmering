import Computer from "./computer.ts";
import Processor from "./processor.ts";

const processor1 = new Processor("AMD", "Ryzen 5 5600X", 6, 3.7);
const computer1 = new Computer("HP", "Pavilion", processor1);
computer1.showInfo();

const processor2 = new Processor("Intel", "I7-12700", 8, 3.0);
const computer2 = new Computer("Lenovo", "L340", processor2);
computer2.showInfo();

// console.log(computer1.processor.cpumodel);