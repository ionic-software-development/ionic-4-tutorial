import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss']
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) {
                activatedRoute.params.subscribe(
                  value => {
                    this.recipes = this.recipeService.getAllRecipes();
                    console.log(this.recipes);
                  }
                );
              }

  ngOnInit() {
    console.log(this.recipes);
    this.recipes = this.recipeService.getAllRecipes();
  }
}
