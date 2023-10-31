import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Input() recipes: Recipe[] = [new Recipe('A test recipe', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s'), new Recipe('A second Recipe!', 'description placeholder for recipe number 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s'), new Recipe('Holy Crap! aThird Recipe', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s'), new Recipe('four is so many recipes', 'description placeholder for recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwX4qeXQQ11jNCEYtQbx9xiU8AYbXm3l1OSotK-VhhvQ&s')];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constrcutor(){}

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

  ngOnInit() {
    
  }

}
