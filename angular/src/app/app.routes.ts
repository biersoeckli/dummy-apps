import { Routes } from '@angular/router';

import { Hello } from './hello/hello';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hello', component: Hello },
];
