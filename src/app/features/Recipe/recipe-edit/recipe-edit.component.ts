import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: string;
  recipe: Recipe;
  mode: 'edit' | 'new' = 'new';

  constructor(
    private rService: RecipeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (!id) {
        this.id = undefined;
        this.mode = 'new';
        return;
      }
      this.mode = 'edit';
      this.recipe = this.rService.getRecipeById(+params['id']);
    });
  }
}
