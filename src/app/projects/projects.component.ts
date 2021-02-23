import { Component, OnInit } from '@angular/core';
import { Project, ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects;

  constructor(service: ProjectsService) { 
    document.title = 'Aktindo | Projects'
    this.projects = service.projects
  }

  ngOnInit(): void {
  }
}
