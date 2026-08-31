export default class GameCharacter {
    private _name: string;
    private _health: number;
    private _maxHealth: number;

    constructor(_name: string, _maxHealth: number) {
        this._name = _name;
        this._maxHealth = _maxHealth;
        this._health = _maxHealth;
    }

    get name(): string {
        return this._name;
    }

    get health(): number {
        return this._health;
    }

    get maxHealth(): number {
        return this._maxHealth;
    }

    takeDamage(amount: number): void {
        if(amount > 0) {
            if(0 <= this._health - amount ) {
                this._health = this._health - amount;
            } else {
                this._health = 0;
            }
        }
    }

    heal(amount: number): void {
        if(amount > 0) {
            if(this._maxHealth <= this._health + amount ) {
                this._health = this._maxHealth;
            } else {
                this._health = this._health + amount;
            }
        }
    }

    isAlive(): boolean {
        if(0 < this._health) {
            return true
        } else {
            return false
        }
    }

    showInfo(): void {
        console.log(this._name);
        console.log(this._health + " / " + this._maxHealth);
    }
}