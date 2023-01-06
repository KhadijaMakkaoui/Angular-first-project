import {Component, Input, OnInit} from '@angular/core';
import {Recepie} from "../../recepie.model";

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie: Recepie = new Recepie('A Test Recepie', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg');
  constructor() { }
  ngOnInit() {
  }

}

