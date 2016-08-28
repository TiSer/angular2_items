import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ItemsService } from './items.service';
import { Item } from './item.model';

@Component({
  selector: 'items-list',
  templateUrl: './app/items-list.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ItemsListComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }
}
