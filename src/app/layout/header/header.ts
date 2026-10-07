import { Component, ElementRef, ViewChild, computed, inject } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
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
  imports: [RouterLink, PersonalLogo, TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {

  /** Translation service the language switch delegates to. */
  private translate = inject(TranslateService);

  /** Languages offered by the switch. */
  languages: Language[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];

  /**
   * Code of the language currently highlighted in the switch.
   *
   * Derived from the translation service rather than stored, so the switch
   * still shows the right language after navigating to another page.
   */
  activeLang = computed(() => this.translate.currentLang());


  /** Section links; each one scrolls to its fragment on the home page. */
  navItems = [
    { labelKey: 'NAV.ABOUT', fragment: 'about-me' },
    { labelKey: 'NAV.SKILLS', fragment: 'skills' },
    { labelKey: 'NAV.PROJECTS', fragment: 'projects' }
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
   * Switches the application to a language.
   *
   * @param code Code of the language to activate.
   */
  setLanguage(code: string): void {
    this.translate.use(code);
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

  /**
   * Closes the navigation dialog when the backdrop is clicked.
   *
   * Fallback for browsers without `closedby="any"` support (Safari/WebKit).
   * The content wrapper fills the dialog, so only a backdrop click has the
   * dialog itself as target.
   *
   * @param event Click event received by the dialog.
   * @param dialog Dialog element the click listener is bound to.
   */
  onDialogClick(event: MouseEvent, dialog: HTMLDialogElement) {
    if (event.target === dialog) dialog.close();
  }

}
