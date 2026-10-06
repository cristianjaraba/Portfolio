import { Routes } from '@angular/router';
import { Imprint } from './pages/imprint/imprint';
import { Home } from './pages/home/home';

export const routes: Routes = [{ 
        path: '', 
        component: Home 
    },
    {
        path: 'imprint',
        component: Imprint
    }
];
