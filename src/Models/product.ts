import { CategoryDTO } from "./category";

export type IncompleteProductDTO = {
    id:number;
    name:string;
    price:number;
}

export class CompleteProductDTO{
    constructor(
    public id:number,
    public name:string,
    public description:string,
    public price:number,
    public imgUrl:string,
    public categories:CategoryDTO[]
    ){}

}