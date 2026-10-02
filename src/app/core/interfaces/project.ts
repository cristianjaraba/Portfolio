import { Technology } from "./technology";

export interface Project {
    projectName: string,
    description: string,
    technologies: Technology[],
    gitHubLink: string,
    LiveTestLink: string,
    screenShot: string
}