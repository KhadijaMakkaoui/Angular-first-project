import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recepie} from "../recepie.model";
import {RecepieService} from "../recepie.service";

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit{
  @Output() recipeWasSelected=new EventEmitter<Recepie>();
  recepies:Recepie[]=[];

  constructor(private recepieService:RecepieService) {
  }
  ngOnInit(): void {
    this.recepies=this.recepieService.getRecepies();
  }

  onRecipeSelected(recipe:Recepie){
    this.recipeWasSelected.emit(recipe);
  }
}
