import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  navItems = [
    { label: 'GitHub', href: '' },
    { label: 'LinkedIn', href: '' },
    { label: 'Email', href: '' },
    { label: 'Legal Notice', href: '' }
  ];
}
