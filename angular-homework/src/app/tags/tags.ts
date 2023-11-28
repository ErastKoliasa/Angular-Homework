import { UUID } from "angular2-uuid";

export interface ITags {
    id: string,
    title: string,
    color: string,
}

export class Tags implements ITags {
    id: string;
    title: string;
    color: string;

    constructor(title:string, color:string){
        this.id = UUID.UUID();
        this.title = title;
        this.color = color;
    }
}