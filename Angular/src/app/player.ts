import { PlayerRole } from "./player-role";



export interface Player {
    
    id: number;
    name: string;
    role?: PlayerRole;
}