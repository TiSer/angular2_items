export class ItemsService {

  items = [
    { id: 1, name: 'Car', price: 999999, description: 'fast' },
    { id: 2, name: 'MP3-Player', price: 100, description: 'funny' },
    { id: 3, name: 'Laptop', price: 1000, description: 'useful' },
    { id: 4, name: 'Core', price: 1, description: 'priceless' },
    { id: 5, name: 'Tent', price: 10, description: 'cozy' }
  ];

  getItems() {
    return this.items;
  }

  getItem(id: any) {
    //this.items[0]
     return this.items.find(item => item.id == id);
  }
}
