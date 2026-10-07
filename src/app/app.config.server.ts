import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

/**
 * Providers added on top of {@link appConfig} while the pages are rendered
 * outside the browser.
 *
 * Only used at build time: the pages are prerendered into static HTML, so
 * nothing of this ships to the server the site is hosted on.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

/** Configuration the prerender bootstraps the application with. */
export const config = mergeApplicationConfig(appConfig, serverConfig);
