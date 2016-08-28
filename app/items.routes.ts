import { ItemsListComponent } from './items-list.component';
import { ItemsDetailComponent } from './items-detail.component';
import { CategoryComponent } from './category.component';

export const ItemsAppRoutes = [
  { path: '', component: ItemsListComponent },
  { path: 'item/:id', component: ItemsDetailComponent },
  { path: 'category/:id', component: CategoryComponent }
]
