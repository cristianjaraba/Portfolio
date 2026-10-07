import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PersonalLogo } from '../../shared/components/personal-logo/personal-logo';
import { RouterLink } from '@angular/router';

/** Site footer with the logo and the contact and legal links. */
@Component({
  imports: [PersonalLogo,
    RouterLink,
    TranslatePipe
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
    { labelKey: 'FOOTER.LINKS.GITHUB', href: 'https://github.com/cristianjaraba' },
    { labelKey: 'FOOTER.LINKS.LINKEDIN', href: 'https://www.linkedin.com/in/cristian-jaraba-castilla/' },
    { labelKey: 'FOOTER.LINKS.EMAIL', href: 'mailto:cristianjaraba@hotmail.com' },
    { labelKey: 'FOOTER.LINKS.LEGAL', route: '/imprint' }
  ];
}
