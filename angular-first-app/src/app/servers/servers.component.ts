import { Component } from '@angular/core';

@Component({
  //select by attribute
  //selector: '[app-servers]',
  //select by class
  //selector: '.app-servers',
  selector: 'app-servers',
  template: `
<app-server></app-server>

<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
