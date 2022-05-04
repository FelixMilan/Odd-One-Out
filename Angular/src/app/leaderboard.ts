export interface LeaderBoard {
    id: number;
    dateCreated: Date;
    data: LeaderBoardData[];
}

export interface LeaderBoardData {
    id: number;
    player: string;
    role: string;
    score: number;
}