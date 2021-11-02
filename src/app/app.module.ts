import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './features/ShoppingList/shopping-list/shopping-list.component';
import { RecipeListComponent } from './features/Recipe/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './features/ShoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './features/Recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './features/Recipe/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './features/Recipe/recipe/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './features/ShoppingList/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { EmptyComponent } from './features/Recipe/empty/empty.component';
import { RecipeEditComponent } from './features/Recipe/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    ShoppingListEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    DropdownDirective,
    EmptyComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
