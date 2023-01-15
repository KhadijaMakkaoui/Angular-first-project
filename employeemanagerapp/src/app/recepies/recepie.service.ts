import { Injectable } from '@angular/core';
import {Recepie} from "./recepie.model";

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  private recepies:Recepie[]=[
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
  constructor() { }
  getRecepies(){
    //get a copy of the array
    return this.recepies.slice();
  }
}
