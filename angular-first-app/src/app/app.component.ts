import { Component } from '@angular/core';
import {Form} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {

  title = 'angular-first-app';
  allowNewServer= false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
