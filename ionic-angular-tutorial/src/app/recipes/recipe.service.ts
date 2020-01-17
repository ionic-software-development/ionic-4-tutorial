import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      imageUrl: 'https://tasteasianfood.com/wp-content/uploads/2018/12/Melting-moments-1.jpg',
      ingredients: ['eggs', 'icing sugar'],
      title: 'Melting Moments'
    },
    {
      id: 'r2',
      title: 'Fish and Chips',
      imageUrl: 'https://images.media-allrecipes.com/userphotos/720x405/970421.jpg',
      ingredients: ['Hake', 'Potatoes', 'Oil']
    },
    {
      id: 'r3',
      title: 'Ribs & Buffalo Wings',
      imageUrl: 'https://amazingribs.com/files/styles/content_body_600px/public/articles/hero/chicken-recipes/buffalo-wings.jpg?itok=eMCxY_v2',
      ingredients: ['Pork Rib', 'Cooking Oil', 'Sauce']
    }
  ];
  constructor() { }

  getAllRecipes() {
    // Pull elements of original array into new array copy
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(
      recipe => {
        return recipe.id === recipeId;
      }
    )
    };
  }

  deleteRecipe(recipeId: string){
    // drop the elements for which the id's are equal
    this.recipes = this.recipes.filter(
      recipe => {
        return recipe.id !== recipeId;
      }
    );
    // this.recipes.forEach(
    //   recipe => {
    //     if(recipe.id === recipeId){
    //       const index = this.recipes.indexOf(recipe);
    //       if (index !== -1) {
    //           this.recipes.splice(index, 1);
    //       }
    //       return;
    //     }
    //   },
    // );
  }
}
