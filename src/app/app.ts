import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';

/**
 * Root shell of the application.
 *
 * Renders the routed page through the router outlet and keeps the footer
 * visible on every route.
 */
@Component({
  imports: [RouterOutlet,
    Footer
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
