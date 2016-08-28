import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ItemsListComponent } from './items-list.component';
import { ItemsService } from './items.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Items App</h1>
    <ul>
      <li><a [routerLink]="['/']">Items List</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ItemsService]
})
export class AppComponent { }
