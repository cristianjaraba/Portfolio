import { Component } from '@angular/core';
import { Language } from '../../core/interfaces/language';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  languages: Language[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];
  activeLang: string = 'de';
  navItems = [
    { label: 'About me', href: '' },
    { label: 'Skills', href: '' },
    { label: 'Projects', href: '' }
  ];

  setLanguage(code: string): void {
    this.activeLang = code;
  }
}
