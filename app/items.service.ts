export class ItemsService {

  items = [
    { name: 'Apple', id: 1 },
    { name: 'Two', id: 2 },
    { name: 'Three', id: 3 }
  ];

  getItems() {
    return this.items;
  }

  getItem(id: any) {
    //this.items[0]
     return this.items.find(item => item.id == id);
  }
}
