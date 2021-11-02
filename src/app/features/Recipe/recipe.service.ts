import { Injectable } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../ShoppingList/shopping-list.service';
import { Recipe } from './recipe/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    constructor(
        private shoppingListService: ShoppingListService,
    ) {}

    private recipes: Recipe[] = [
        new Recipe(
            'dummy recipe1',
            'dummy description1',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
            [
                new Ingridient('Meat', 1),
                new Ingridient('Potato', 3)
            ]
        ),
        new Recipe(
            'dummy recipe2',
            'dummy description2',
            'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
            []
        )
    ];

    get recipesList(): Recipe[] {
        return [...this.recipes];
    }

    public getRecipeById(id: number): Recipe | null {
        return this.recipesList[id];
    }

    public addIngridients(ingridients: Ingridient[]): void {
        this.shoppingListService.addIngridient(ingridients);
    }
}
