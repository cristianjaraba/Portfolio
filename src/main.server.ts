import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

/**
 * Entry point used to prerender the pages into static HTML at build time.
 *
 * @param context Rendering context the platform hands over to the bootstrap.
 * @returns The bootstrapped application the renderer serializes.
 */
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
