import { Component, inject, ElementRef, viewChild } from '@angular/core';
import { Project } from '../../../core/interfaces/project';
import { ProjectService } from '../../../core/services/project-service';

@Component({
  imports: [],
  selector: 'app-project-dialog',
  styleUrl: './project-dialog.scss',
  templateUrl: './project-dialog.html',
})
export class ProjectDialog {

  projectService = inject(ProjectService);
  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
  }

  getProjectIndex(): number | null {
    const current = this.projectService.currentProject();
    return current ? this.projectService.projects.indexOf(current) + 1 : null;
  }

  updateCurrentProject() {
    const current = this.projectService.currentProject();
    if (!current) return;
    const projects = this.projectService.projects;
    const i = projects.indexOf(current);
    this.projectService.currentProject.set(projects[(i + 1) % projects.length]);
  }

  open() {
    this.dialog().nativeElement.showModal();
  }

  close() {
    this.dialog().nativeElement.close();
  }

}
