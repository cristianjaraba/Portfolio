import { Component } from '@angular/core';
import { PersonalLogo } from '../../shared/components/personal-logo/personal-logo';
import { RouterLink } from '@angular/router';

/** Site footer with the logo and the contact and legal links. */
@Component({
  imports: [PersonalLogo,
    RouterLink
  ],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  /**
   * Footer links; an item with `route` is navigated in app, an item with
   * `href` points to an external target and opens in a new tab.
   */
  navItems = [
    { label: 'GitHub', href: 'https://github.com/cristianjaraba' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristian-jaraba-castilla/' },
    { label: 'Email', href: 'mailto:cristianjaraba@hotmail.com' },
    { label: 'Legal Notice', route: '/imprint' }
  ];
}
