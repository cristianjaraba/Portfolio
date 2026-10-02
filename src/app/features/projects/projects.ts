import { Component } from '@angular/core';
import { Project } from '../../core/interfaces/project';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  featuredProjects: Project[];

  constructor() {
    this.featuredProjects = [
      {
        projectName: 'Join',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        technologies: [{
          technology: 'HTML',
          svg: 'jaraba-portfolio/src/assets/icons/skills/HTML.svg'
        }, {
          technology: 'CSS',
          svg: 'jaraba-portfolio/src/assets/icons/skills/CSS.svg'
        }, {
          technology: 'TypeScript',
          svg: 'jaraba-portfolio/src/assets/icons/skills/TypeScript.svg'
        },
        {
          technology: 'Angular',
          svg: 'jaraba-portfolio/src/assets/icons/skills/Angular.svg'
        }, {
          technology: 'Firebase',
          svg: 'jaraba-portfolio/src/assets/icons/skills/Firebase.svg'
        }],
        gitHubLink: 'https://github.com/cristianjaraba',
        LiveTestLink: '',
        screenShot: 'assets/images/screenshots/join.png'
      },
      {
        projectName: 'El Pollo Loco',
        description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        technologies: [{
          technology: 'HTML',
          svg: 'jaraba-portfolio/src/assets/icons/skills/HTML.svg'
        }, {
          technology: 'CSS',
          svg: 'jaraba-portfolio/src/assets/icons/skills/CSS.svg'
        }, {
          technology: 'JavaScript',
          svg: 'jaraba-portfolio/src/assets/icons/skills/JavaScript.svg'
        }],
        gitHubLink: 'https://github.com/cristianjaraba/El-pollo-loco',
        LiveTestLink: '',
        screenShot: 'assets/images/screenshots/el_pollo_loco_screen_shot.png'
      },
      {
        projectName: 'DABubble',
        description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        technologies: [{
          technology: 'HTML',
          svg: 'jaraba-portfolio/src/assets/icons/skills/HTML.svg'
        }, {
          technology: 'CSS',
          svg: 'jaraba-portfolio/src/assets/icons/skills/CSS.svg'
        }, {
          technology: 'JavaScript',
          svg: 'jaraba-portfolio/src/assets/icons/skills/JavaScript.svg'
        }],
        gitHubLink: 'https://github.com/cristianjaraba',
        LiveTestLink: '',
        screenShot: 'assets/images/screenshots/dabubble.png'
      }
    ];
  }
}
