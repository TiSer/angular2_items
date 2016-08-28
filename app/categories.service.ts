export class CategoriesService {

  categories = [
    { id: 1, name: 'First'},
    { id: 2, name: 'Second'}
  ];

  getCategories() {
    return this.categories;
  }

  getCategory(id: any) {
     return this.categories.find(category => category.id == id);
  }

}
