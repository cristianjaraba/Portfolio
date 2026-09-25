import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './features/hero/hero';
import { AboutMe } from './features/about-me/about-me';
import { Skills } from './features/skills/skills';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Testimonials } from './features/testimonials/testimonials';

@Component({
  imports: [RouterOutlet,
    Header,
    Footer,
    Hero, 
    AboutMe, 
    Skills,
    Projects,
    Testimonials,
    Contact
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jaraba-portfolio');
}
