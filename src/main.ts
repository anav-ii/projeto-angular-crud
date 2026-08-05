import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { MenuComponent } from './app/components/menu/menu.component';
import { routes } from './app/app.routes';


bootstrapApplication(MenuComponent,
  {
    providers: [
      provideRouter(routes),
      provideHttpClient()
    ]
  })
  .catch((err) => console.error(err));
