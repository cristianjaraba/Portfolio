import { Routes } from '@angular/router';
import { Imprint } from './pages/imprint/imprint';
import { Home } from './pages/home/home';

/**
 * Top level route table of the portfolio.
 *
 * The empty path serves the one page portfolio, `imprint` serves the legal
 * notice linked from the footer and the contact form.
 */
export const routes: Routes = [{
        path: '',
        component: Home
    },
    {
        path: 'imprint',
        component: Imprint
    }
];
