import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './categories.service';
import { ItemsService } from './items.service';
import { Category } from './category.model';
import { Item } from './item.model';

@Component({
  selector: 'categories-list',
  template: `
     <h4>Items</h4>
     <li *ngFor="let item of items">
       <a [routerLink]="['/item',  item.id ]">{{item.name}}</a>
     </li>
     <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class CategoryComponent implements OnInit {

  category: Category;
  id: number;
  items: Item[];
  item: Item;

  constructor(private categoriesService: CategoriesService, private itemsService: ItemsService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.category = this.categoriesService.getCategory(this.route.snapshot.params['id']);
    this.items = this.itemsService.getCategorizedItems(this.category.id);
  }
}
