import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmptyComponent } from "./features/Recipe/empty/empty.component";
import { RecipeDetailComponent } from "./features/Recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./features/Recipe/recipe-edit/recipe-edit.component";
import { RecipeComponent } from "./features/Recipe/recipe/recipe.component";
import { ShoppingListComponent } from "./features/ShoppingList/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeComponent, children: [
        { path: '', component: EmptyComponent },
        { path: 'new', component: RecipeEditComponent },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent },
    ] },
    { path: 'shopping', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
