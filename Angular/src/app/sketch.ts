import { Votable } from "./votable";

export class Sketch implements Votable {
    id: number = 0;
    imageData: string = '';
    votingNumber: number = 0;
}