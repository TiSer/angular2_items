import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from './items.service';
import { Item } from './item.model';

@Component({
  selector: 'items-detail',
  template: `
    <h2>{{item.name}}</h2>
    <div>
      <p>Price: {{item.price}}</p>
      <p>Description: {{item.description}}</p>
    </div>
  `
})
export class ItemsDetailComponent implements OnInit {

  id: number;
  item: Item;

  constructor(private itemsService: ItemsService,
              private route: ActivatedRoute){}

  ngOnInit() {
    this.item = this.item = this.itemsService.getItem(this.route.snapshot.params['id']);
  }
}
