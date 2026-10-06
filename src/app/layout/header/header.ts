import { Component, ElementRef, ViewChild } from '@angular/core';
import { Language } from '../../core/interfaces/language';
import { RouterLink } from '@angular/router';
import { PersonalLogo } from '../../shared/components/personal-logo/personal-logo';

/**
 * Site header with the logo, the section links and the language switch.
 *
 * On small screens the links move into a native dialog that is positioned
 * under the burger menu before being opened.
 */
@Component({
  imports: [RouterLink, PersonalLogo],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  /** Languages offered by the switch. */
  languages: Language[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];

  /** Code of the language currently highlighted in the switch. */
  activeLang: string = 'de';

  /** Section links; each one scrolls to its fragment on the home page. */
  navItems = [
    { label: 'About me', fragment: 'about-me'  },
    { label: 'Skills', fragment: 'skills'  },
    { label: 'Projects', fragment: 'projects' }
  ];

  /** Native dialog holding the navigation on small screens. */
  @ViewChild('navigation_dialog')
  dialog!: ElementRef<HTMLDialogElement>;

  /** Burger menu the navigation dialog is aligned to. */
  @ViewChild('menu')
  menu!: ElementRef<HTMLElement>;

  /** Last measured position of the burger menu. */
  rectMenu!: DOMRect;

  /**
   * Highlights a language in the switch.
   *
   * @param code Code of the language to activate.
   */
  setLanguage(code: string): void {
    this.activeLang = code;
  }

  /** Aligns the navigation dialog under the burger menu and opens it. */
  openDialog() {
    this.rectMenu = this.menu.nativeElement.getBoundingClientRect();
    this.dialog.nativeElement.style.top = `${this.rectMenu.bottom + 15}px`;
    this.dialog.nativeElement.style.right = `${window.innerWidth - this.rectMenu.right}px`;
    this.dialog.nativeElement.showModal();
  }

  /** Closes the navigation dialog. */
  closeDialog(){
    this.dialog.nativeElement.close();
  }

}
