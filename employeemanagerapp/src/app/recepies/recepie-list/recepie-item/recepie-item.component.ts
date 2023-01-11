import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recepie} from "../../recepie.model";

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie: Recepie=new Recepie('','','');
  @Output() recipeSelected=new EventEmitter<void>();

/*  constructor(recepie: Recepie) {
    this.recepie = recepie;
  }*/

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }
}

