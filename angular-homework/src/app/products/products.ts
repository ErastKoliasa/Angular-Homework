import { UUID } from "angular2-uuid";
import { Tags } from "../tags/tags";

export interface IProducts {
    id:string,
    name: string,
    price: number,
    description: string,
    tags: Tags[],
}

export class Products implements IProducts {
    id:string;
    name: string;
    price: number;
    description: string;
    tags: Tags[];

    constructor( name: string, price: number, description: string, tags: Tags[]){
        this.id = UUID.UUID();
        this.name = name;
        this.price = price;
        this.description = description;
        this.tags = tags
    }
}