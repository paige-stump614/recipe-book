import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [new Recipe('A test recipe', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s'), 
    new Recipe('A second Recipe!', 'description placeholder for recipe number 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s'), 
    new Recipe('Holy Crap! aThird Recipe', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s'), 
    new Recipe('four is so many recipes', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s')];

    getRecipes() {
        //slice like this returns a copy of the values stored in the variable instead of a reference to the variable
        return this.recipes.slice();
    }
}