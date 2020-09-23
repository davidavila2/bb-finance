import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, ProjectsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { Project } from '@bba/api-interfaces';

import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsComponent } from './projects.component';

import { mockProject, mockEmptyProject } from '@bba/testing';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;
  let projectsFacade: ProjectsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectDetailsComponent,
        ProjectsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    projectsFacade = TestBed.inject(ProjectsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call projectsFacade selectProject', () => {
    const spy = jest.spyOn(projectsFacade, 'selectProject');

    component.selectProject(mockProject);

    expect(spy).toHaveBeenCalledWith(mockProject.id);
  });

  describe('should on save call projectsFacade', () => {
    it('updateProject', () => {
      const spy = jest.spyOn(projectsFacade, 'updateProject');

      component.saveProject(mockProject);

      expect(spy).toHaveBeenCalledWith(mockProject);
    });

    it('createProject', () => {
      const spy = jest.spyOn(projectsFacade, 'createProject');

      component.saveProject(mockEmptyProject);

      expect(spy).toHaveBeenCalledWith(mockEmptyProject);
    });
  });

  it('should on delete call projectsFacade deleteProject', () => {
    const spy = jest.spyOn(projectsFacade, 'deleteProject');

    component.deleteProject(mockProject);

    expect(spy).toHaveBeenCalledWith(mockProject);
  });
});
