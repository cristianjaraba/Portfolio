import { Component, inject, viewChild } from '@angular/core';
import { ProjectService } from '../../core/services/project-service';
import { Project } from '../../core/interfaces/project';
import { ProjectDialog } from './project-dialog/project-dialog';

@Component({
  imports: [ProjectDialog],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  
  projectService = inject(ProjectService);
  featuredProjects: Project[];
  dialog = viewChild.required(ProjectDialog);

  openDialog(project: Project){
    this.setCurrentProject(project);
    this.dialog().open();
    
  }

  setCurrentProject(project: Project) {
  this.projectService.currentProject.set(project);
}

  constructor() {
    this.featuredProjects = this.projectService.getProjects();
  }
}
