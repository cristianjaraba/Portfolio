import { Technology } from "./technology";

/** A portfolio project shown in the projects section and its dialog. */
export interface Project {
    /** Display name of the project. */
    projectName: string,
    /** Translation key of the summary shown in the dialog. */
    descriptionKey: string,
    /** Stack the project was built with. */
    technologies: Technology[],
    /** Public repository URL. */
    gitHubLink: string,
    /** Deployed demo URL, empty when the project is not hosted. */
    LiveTestLink: string,
    /** Path to the screenshot used as the project preview. */
    screenShot: string
}
