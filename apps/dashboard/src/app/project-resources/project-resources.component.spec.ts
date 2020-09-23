import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, ProjectResourcesFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { ProjectResource } from '@bba/api-interfaces';

import { ProjectResourceDetailsComponent } from './project-resource-details/project-resource-details.component';
import { ProjectResourcesListComponent } from './project-resources-list/project-resources-list.component';
import { ProjectResourcesComponent } from './project-resources.component';

import { mockProjectResource, mockEmptyProjectResource } from '@bba/testing';

describe('ProjectResourcesComponent', () => {
  let component: ProjectResourcesComponent;
  let fixture: ComponentFixture<ProjectResourcesComponent>;
  let de: DebugElement;
  let projectResourcesFacade: ProjectResourcesFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectResourcesComponent,
        ProjectResourceDetailsComponent,
        ProjectResourcesListComponent,
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
    fixture = TestBed.createComponent(ProjectResourcesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    projectResourcesFacade = TestBed.inject(ProjectResourcesFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call projectResourcesFacade selectProjectResource', () => {
    const spy = jest.spyOn(projectResourcesFacade, 'selectProjectResource');

    component.selectProjectResource(mockProjectResource);

    expect(spy).toHaveBeenCalledWith(mockProjectResource.id);
  });

  describe('should on save call projectResourcesFacade', () => {
    it('updateProjectResource', () => {
      const spy = jest.spyOn(projectResourcesFacade, 'updateProjectResource');

      component.saveProjectResource(mockProjectResource);

      expect(spy).toHaveBeenCalledWith(mockProjectResource);
    });

    it('createProjectResource', () => {
      const spy = jest.spyOn(projectResourcesFacade, 'createProjectResource');

      component.saveProjectResource(mockEmptyProjectResource);

      expect(spy).toHaveBeenCalledWith(mockEmptyProjectResource);
    });
  });

  it('should on delete call projectResourcesFacade deleteProjectResource', () => {
    const spy = jest.spyOn(projectResourcesFacade, 'deleteProjectResource');

    component.deleteProjectResource(mockProjectResource);

    expect(spy).toHaveBeenCalledWith(mockProjectResource);
  });
});
