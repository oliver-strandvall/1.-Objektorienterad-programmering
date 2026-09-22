import Employee from "./employee.ts"

export default class Developer extends Employee {
    _programmingLanguage: string;

    constructor(name: string, salary: number, programmingLanguage: string) {
        super(name, salary);
        this._programmingLanguage = programmingLanguage;
    }

    writeCode(): void {
        console.log(this._name + " Is Writing " + this._programmingLanguage + " Code");
    }
}