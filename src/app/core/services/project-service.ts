import { Service, signal } from '@angular/core';
import { Project } from '../interfaces/project';

@Service()
export class ProjectService {
    projects: Project[];
    currentProject = signal<Project | null>(null);

    constructor() {
        this.projects = [
            {
                projectName: 'Join',
                description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
                technologies: [{
                    technology: 'HTML',
                    svg: 'assets/icons/skills-green/HTML.svg'
                }, {
                    technology: 'CSS',
                    svg: 'assets/icons/skills-green/CSS.svg'
                }, {
                    technology: 'TypeScript',
                    svg: 'assets/icons/skills-green/TypeScript.svg'
                },
                {
                    technology: 'Angular',
                    svg: 'assets/icons/skills-green/Angular.svg'
                }, {
                    technology: 'Firebase',
                    svg: 'assets/icons/skills-green/Firebase.svg'
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
                    svg: 'assets/icons/skills-green/HTML.svg'
                }, {
                    technology: 'CSS',
                    svg: 'assets/icons/skills-green/CSS.svg'
                }, {
                    technology: 'JavaScript',
                    svg: 'assets/icons/skills-green/JavaScript.svg'
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
                    svg: 'assets/icons/skills-green/HTML.svg'
                }, {
                    technology: 'CSS',
                    svg: 'assets/icons/skills-green/CSS.svg'
                }, {
                    technology: 'JavaScript',
                    svg: 'assets/icons/skills-green/JavaScript.svg'
                }],
                gitHubLink: 'https://github.com/cristianjaraba',
                LiveTestLink: '',
                screenShot: 'assets/images/screenshots/dabubble.png'
            }
        ];
    }

    getProjects(){
        return this.projects;
    }
}
