import Employee from "./employee.ts";

export default class Designer extends Employee {
    _designTool: string;

    constructor(name: string, salary: number, designTool: string) {
        super(name, salary);
        this._designTool = designTool;
    }

    work(): void {
        console.log(this._name + " Is Creating a Design Using " + this._designTool);
    }
}