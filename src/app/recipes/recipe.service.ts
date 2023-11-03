import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe('A test recipe', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s', [new Ingredient('eggs', 5), new Ingredient('dough', 2)]), 
    new Recipe('A second Recipe!', 'description placeholder for recipe number 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s', [new Ingredient('eggs', 5), new Ingredient('dough', 2)]), 
    new Recipe('Holy Crap! aThird Recipe', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s', [new Ingredient('eggs', 5), new Ingredient('dough', 2)]), 
    new Recipe('four is so many recipes', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s', [new Ingredient('eggs', 5), new Ingredient('dough', 2)])];

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        //slice like this returns a copy of the values stored in the variable instead of a reference to the variable
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    
}