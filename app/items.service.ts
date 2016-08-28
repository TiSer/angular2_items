export class ItemsService {

  items = [
    { id: 1, name: 'Car', price: 999999, description: 'fast', category_id: 1 },
    { id: 2, name: 'MP3-Player', price: 100, description: 'funny', category_id: 1 },
    { id: 3, name: 'Laptop', price: 1000, description: 'useful', category_id: 1 },
    { id: 4, name: 'Core', price: 1, description: 'priceless', category_id: 2 },
    { id: 5, name: 'Tent', price: 10, description: 'cozy', category_id: 2 }
  ];

  getItems() {
    return this.items;
  }

  getCategorizedItems(category_id) {
    return this.items.filter(item => item.category_id == category_id)
  }

  getItem(id: any) {
    //this.items[0]
     return this.items.find(item => item.id == id);
  }
}
