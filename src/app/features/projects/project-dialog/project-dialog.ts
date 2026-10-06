import { Component, inject, ElementRef, viewChild } from '@angular/core';
import { ProjectService } from '../../../core/services/project-service';

/**
 * Modal dialog showing the details of the current project.
 *
 * The project comes from the shared service, so the dialog can cycle through
 * the list without the projects section being involved.
 */
@Component({
  imports: [],
  selector: 'app-project-dialog',
  styleUrl: './project-dialog.scss',
  templateUrl: './project-dialog.html',
})
export class ProjectDialog {

  projectService = inject(ProjectService);

  /** Native dialog element driven by `open` and `close`. */
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  /**
   * Returns the position of the current project in the project list.
   *
   * @returns The one based index, or `null` while no project is selected.
   */
  getProjectIndex(): number | null {
    const current = this.projectService.currentProject();
    return current ? this.projectService.projects.indexOf(current) + 1 : null;
  }

  /** Moves to the next project, wrapping around at the end of the list. */
  updateCurrentProject() {
    const current = this.projectService.currentProject();
    if (!current) return;
    const projects = this.projectService.projects;
    const i = projects.indexOf(current);
    this.projectService.currentProject.set(projects[(i + 1) % projects.length]);
  }

  /** Opens the dialog as a modal. */
  open() {
    this.dialog().nativeElement.showModal();
  }

  /** Closes the dialog. */
  close() {
    this.dialog().nativeElement.close();
  }

}
