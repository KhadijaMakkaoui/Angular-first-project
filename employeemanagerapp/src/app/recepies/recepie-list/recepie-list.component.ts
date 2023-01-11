import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recepie} from "../recepie.model";

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit{
  @Output() recipeWasSelected=new EventEmitter<Recepie>();
  recepies:Recepie[]=[
    new Recepie('A Test Recepie1',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
    new Recepie('A Test Recepie2',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    ),
    new Recepie('A Test Recepie3',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
    )
  ];

  constructor() {
  }
  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recepie){
    this.recipeWasSelected.emit(recipe);
  }
}
