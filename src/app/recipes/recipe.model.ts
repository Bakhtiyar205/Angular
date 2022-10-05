import { Ingredient } from "../shared/ingredients.model";

export class Recipe{
    public name: string;
    public descripton:string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string,desc: string,imagePath:string,ingredient: Ingredient[]){
        this.name = name;
        this.descripton = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredient;
    }
}