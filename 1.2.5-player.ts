class Player {
    name: string;
    health: number;
    score: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
        this.score = 0;
    }

    takeDamage(amount: number): void {
        this.health = this.health - amount;
    }

    heal(amount: number): void {
        this.health = this.health + amount;
    }

    addScore(points: number): void {
        this.score = this.score + points;
    }

    showInfo(): void {
        console.log("Player: ", this.name);
        console.log("Health: ", this.health);
        console.log("Score: ", this.score);
    }
}

const player1 = new Player("Steve");

player1.takeDamage(30);
player1.addScore(100);
player1.heal(10);
player1.takeDamage(25);
player1.addScore(50);
player1.showInfo();

const player2 = new Player("Alex");

player2.takeDamage(15);
player2.addScore(50);
player2.heal(5);
player2.takeDamage(45);
player2.addScore(75);
player2.showInfo();