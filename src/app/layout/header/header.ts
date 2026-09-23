import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('navigation_dialog')
  dialog!: ElementRef<HTMLDialogElement>;

  @ViewChild('menu')
  menu!: ElementRef<HTMLElement>;

  rectMenu!: DOMRect;

  setLanguage(code: string): void {
    this.activeLang = code;
  }

  openDialog() {
    this.rectMenu = this.menu.nativeElement.getBoundingClientRect();
    this.dialog.nativeElement.style.top = `${this.rectMenu.bottom + 15}px`;
    this.dialog.nativeElement.style.right = `${window.innerWidth - this.rectMenu.right}px`;
    this.dialog.nativeElement.showModal();
  }

}
