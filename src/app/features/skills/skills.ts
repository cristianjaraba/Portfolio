import { Component } from '@angular/core';

/** Skills section rendering one badge per technology. */
@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {

  /** Skill names; each one maps to an icon of the same name in the assets. */
  icons = ['HTML',
    'CSS',
    'JavaScript',
    'REST-API',
    'TypeScript',
    'Angular',
    'Git',
    'Material Design',
    'Scrum',
    'Growth mindset'
  ];

}
