import { Component, inject, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectService } from '../../core/services/project-service';
import { Project } from '../../core/interfaces/project';
import { ProjectDialog } from './project-dialog/project-dialog';

/**
 * Projects section listing the featured projects.
 *
 * Clicking a project stores it as the current one and opens the shared
 * project dialog.
 */
@Component({
  imports: [ProjectDialog, TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {

  /** Source of the project list and of the project the dialog shows. */
  projectService = inject(ProjectService);

  /** Projects rendered in the section. */
  featuredProjects: Project[];

  /** Dialog used to show the details of the selected project. */
  dialog = viewChild.required(ProjectDialog);

  /**
   * Opens the project dialog on the given project.
   *
   * @param project Project to show in the dialog.
   */
  openDialog(project: Project){
    this.setCurrentProject(project);
    this.dialog().open();

  }

  /**
   * Marks a project as the one currently being viewed.
   *
   * @param project Project to store as current.
   */
  setCurrentProject(project: Project) {
  this.projectService.currentProject.set(project);
}

  /** Loads the projects to render from the project service. */
  constructor() {
    this.featuredProjects = this.projectService.getProjects();
  }
}
