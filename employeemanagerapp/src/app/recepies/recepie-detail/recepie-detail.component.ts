import {Component, Input} from '@angular/core';
import {Recepie} from "../recepie.model";

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent {
  @Input() recepieDetail:Recepie=new Recepie('','','');
/*  constructor(recepie:Recepie) {
    this.recepie=recepie;
  }*/

}
