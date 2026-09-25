import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  navItems = [
    { label: 'GitHub', href: 'https://github.com/cristianjaraba' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cristian-jaraba-castilla/' },
    { label: 'Email', href: 'mailto:cristianjaraba@hotmail.com' },
    { label: 'Legal Notice', href: '' }
  ];
}
