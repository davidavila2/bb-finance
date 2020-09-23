import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, ResourcesFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { Resource } from '@bba/api-interfaces';

import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import { ResourcesComponent } from './resources.component';

import { mockResource, mockEmptyResource } from '@bba/testing';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;
  let de: DebugElement;
  let resourcesFacade: ResourcesFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResourcesComponent,
        ResourceDetailsComponent,
        ResourcesListComponent,
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
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    resourcesFacade = TestBed.inject(ResourcesFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call resourcesFacade selectResource', () => {
    const spy = jest.spyOn(resourcesFacade, 'selectResource');

    component.selectResource(mockResource);

    expect(spy).toHaveBeenCalledWith(mockResource.id);
  });

  describe('should on save call resourcesFacade', () => {
    it('updateResource', () => {
      const spy = jest.spyOn(resourcesFacade, 'updateResource');

      component.saveResource(mockResource);

      expect(spy).toHaveBeenCalledWith(mockResource);
    });

    it('createResource', () => {
      const spy = jest.spyOn(resourcesFacade, 'createResource');

      component.saveResource(mockEmptyResource);

      expect(spy).toHaveBeenCalledWith(mockEmptyResource);
    });
  });

  it('should on delete call resourcesFacade deleteResource', () => {
    const spy = jest.spyOn(resourcesFacade, 'deleteResource');

    component.deleteResource(mockResource);

    expect(spy).toHaveBeenCalledWith(mockResource);
  });
});
