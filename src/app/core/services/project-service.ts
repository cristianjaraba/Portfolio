import { Service, signal } from '@angular/core';
import { Project } from '../interfaces/project';

/**
 * Holds the portfolio projects and the one currently opened in the dialog.
 *
 * The project list is static, so it is built once in the constructor instead
 * of being fetched.
 */
@Service()
export class ProjectService {
    /** Every project shown in the projects section, in display order. */
    projects: Project[];

    /** Project opened in the project dialog, `null` while it is closed. */
    currentProject = signal<Project | null>(null);

    /** Builds the static project list. */
    constructor() {
        this.projects = [
            {
                projectName: 'Join',
                descriptionKey: 'PROJECTS.ITEMS.JOIN',
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
                screenShot: 'assets/images/screenshots/join.jpg'
            },
            {
                projectName: 'El Pollo Loco',
                descriptionKey: 'PROJECTS.ITEMS.EL_POLLO_LOCO',
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
                screenShot: 'assets/images/screenshots/el_pollo_loco.jpg'
            },
            {
                projectName: 'DABubble',
                descriptionKey: 'PROJECTS.ITEMS.DABUBBLE',
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
                screenShot: 'assets/images/screenshots/dabubble.jpg'
            }
        ];
    }

    /**
     * Returns every portfolio project.
     *
     * @returns The projects in display order.
     */
    getProjects(){
        return this.projects;
    }
}
