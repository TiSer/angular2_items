import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { ItemsAppRoutes } from './items.routes';

bootstrap(AppComponent, [
  provideRouter(ItemsAppRoutes)
]);
