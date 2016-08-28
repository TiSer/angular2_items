import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ItemsService } from './items.service';
import { Item } from './item.model';
import { PaginatePipe, PaginationControlsCmp, PaginationService } from 'ng2-pagination';

@Component({
  selector: 'items-list',
  templateUrl: './app/items-list.component.html',
  directives: [ROUTER_DIRECTIVES, PaginationControlsCmp],
  providers: [PaginationService],
  pipes: [PaginatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsListComponent implements OnInit {

  items: Item[];

  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }
}
