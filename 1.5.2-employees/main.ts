import Designer from "./designer.ts";
import Developer from"./developer.ts";

async function main() {
    const developer = new Developer("Mike", 3650, "C++");
    const designer = new Designer("Sarah", 3000, "Canva");

    developer.showInfo();
    developer.writeCode();
    designer.showInfo();
    designer.createDesign();
}

main();