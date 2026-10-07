import { Component, DOCUMENT, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Footer } from './layout/footer/footer';

/**
 * Root shell of the application.
 *
 * Renders the routed page through the router outlet, keeps the footer visible
 * on every route and holds the document in the language being displayed.
 */
@Component({
  imports: [RouterOutlet,
    Footer
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  /** Document whose `lang` attribute follows the language switch. */
  private document = inject(DOCUMENT);

  /** Translation service the active language is read from. */
  private translate = inject(TranslateService);

  /**
   * Mirrors the active language onto the `lang` attribute of the document,
   * so screen readers and browser translation see the language the page is
   * actually rendered in instead of the one hard coded in `index.html`.
   */
  constructor() {
    effect(() => {
      const lang = this.translate.currentLang() ?? this.translate.fallbackLang();
      if (lang) {
        this.document.documentElement.lang = lang;
      }
    });
  }
}
