import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private alertController: AlertController,
              public toastController: ToastController) {}

  ngOnInit() {
    // paramMap is a map with all parameters
    this.activatedRoute.paramMap.subscribe(
      paramMap =>{
        if(!paramMap.has('recipeId')){
          // redirect
          this.router.navigate(['/recipes']);
          return;
        }
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipeService.getRecipe(recipeId);
      }
    );
  }

  deleteRecipe() {
    // The create method returns a promise for which we want to do something after the alert controller is "prepared"
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.toastController.create({
              message: 'Recipe is successfully deleted',
              closeButtonText: 'Dismiss',
              buttons: [
                {
                  text: 'Dismiss',
                  role: 'cancel'
                }
              ]
            }).then(
              toastEl => {
                toastEl.present();
              }
            );
            // also leave the page because the data for the page would have been deleted
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(
      alertEl =>{
        alertEl.present();
      }
    );
  }
}
