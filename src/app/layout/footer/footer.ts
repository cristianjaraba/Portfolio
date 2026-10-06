import { Component } from '@angular/core';
import { PersonalLogo } from '../../shared/components/personal-logo/personal-logo';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PersonalLogo,
    RouterLink
  ],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  navItems = [
    { label: 'GitHub', href: 'https://github.com/cristianjaraba' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristian-jaraba-castilla/' },
    { label: 'Email', href: 'mailto:cristianjaraba@hotmail.com' },
    { label: 'Legal Notice', route: '/imprint' }
  ];
}
