import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/** Entry point; boots the root component with the application providers. */
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
