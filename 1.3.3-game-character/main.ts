import GameCharacter from './game-character.ts';

const gamecharacter1 = new GameCharacter("Bob", 100);
gamecharacter1.takeDamage(50);
gamecharacter1.heal(-25);

if (gamecharacter1.isAlive()) {
    console.log("The character is alive.");
} else {
    console.log("The character has been defeated.");
}

if(gamecharacter1.isAlive()) {
    gamecharacter1.heal(30);
}

gamecharacter1.showInfo();

const gamecharacter2 = new GameCharacter("Mike", 80);
gamecharacter2.heal(150);
gamecharacter2.takeDamage(250);

if (gamecharacter2.isAlive()) {
    console.log("The character is alive.");
} else {
    console.log("The character has been defeated.");
}

gamecharacter2.showInfo();