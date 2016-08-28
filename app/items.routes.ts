import { ItemsListComponent } from './items-list.component';
import { ItemsDetailComponent } from './items-detail.component';

export const ItemsAppRoutes = [
  { path: '', component: ItemsListComponent },
  { path: 'item/:id', component: ItemsDetailComponent }
]
