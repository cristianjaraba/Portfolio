import { Component } from '@angular/core';
import { AboutMe } from '../../features/about-me/about-me';
import { Skills } from '../../features/skills/skills';
import { Projects } from '../../features/projects/projects';
import { Contact } from '../../features/contact/contact';
import { Hero } from '../../features/hero/hero';
import { Header } from '../../layout/header/header';

@Component({
  imports: [Header,
    Hero,
    AboutMe,
    Skills,
    Projects,
    Contact
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
