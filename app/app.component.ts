import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ItemsListComponent } from './items-list.component';
import { ItemsService } from './items.service';
import { CategoryComponent } from './category.component';
import { CategoriesService } from './categories.service';
import { Category } from './category.model';

@Component({
  selector: 'my-app',
  template: `
    <h1>Items App</h1>
    <a [routerLink]="['/']">Items List</a>
    <h4>Categories</h4>
    <ul class="list-inline">
      <li *ngFor="let category of categories">
        <a [routerLink]="['/category', category.id ]">{{category.name}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ItemsService, CategoriesService],
  styleUrls: ["./app/app.component.css"]
})

export class AppComponent implements OnInit {
  categories: Category[];
  category: Category;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.getCategories();
  }
}
