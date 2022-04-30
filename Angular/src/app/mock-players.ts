import { Player } from "./player";

let namePool!: string[];

export let players: Player[] = [
    new Player("David", ""),
    new Player("Janet", ""),
    new Player("Mohammed", ""),
    new Player("Michelle", "")
];

//temporary
function generatePool() {
    namePool.push("Bob Marley");
    namePool.push("Barack Obama");
    namePool.push("Jigglypuff");
    namePool.push("Taylor Swift");
}

export function assignNamesAtRandom() {
    generatePool();
    let visitedIndex: number[] = [];

    for (let i: number = 0; i < players.length; i++) {
        let rand = getRandomInt(0, players.length - 1);

        while (visitedIndex.includes(rand)) {
            rand = getRandomInt(0, players.length - 1);
        }

        if (!visitedIndex.includes(rand)) {
            players[i].setAssignedName(
                namePool[rand]
            );

            visitedIndex.push(rand);
        }
    }
}

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}