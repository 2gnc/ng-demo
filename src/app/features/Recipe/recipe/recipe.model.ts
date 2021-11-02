import { Ingridient } from "src/app/shared/ingridient.model";

export class Recipe {
    constructor(
        public name: string,
        public description: string,
        public imagePath: string,
        public ingridients: Ingridient[]
    ) {};
}
