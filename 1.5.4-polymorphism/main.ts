import Employee from "./employee.ts";
import Designer from "./designer.ts";
import Developer from "./developer.ts";
import Manager from "./manager.ts";

async function main() {
    let totalSalary = 0;

    const employees: Employee[] = [
        new Developer("Sam", 2600, "Python"),
        new Designer("Adam", 2400, "Figma"),
        new Developer("Johan", 2600, "Typescript"),
        new Designer("Sofia", 2400, "Photoshop"),
        new Manager("Mike", 3000, 4)
    ];

    employees.forEach((employee) => {
        employee.work();
        totalSalary = totalSalary + employee._salary
    });

    console.log("Total Salaries: " + totalSalary);

    function startWork(employee: Employee): void {
        employee.work();
    }
}

main();