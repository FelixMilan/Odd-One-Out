import { PlayerRole } from "./player-role";



export class Player {
    name: string;
    playerlist?: Array<{name:string}>;
    id: number;
    role?: PlayerRole;
    // playerlist!: Array<{ name: string; id: number; role?: PlayerRole; }>;

    // constructor (name:string) {
    //     this.name = name;
    // }
    constructor(name:string, id:number, role:PlayerRole) {
        this.name = name;
        this.id=id;
        this.role=role;
    }
}