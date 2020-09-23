import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { ProjectResourcesEffects } from './project-resources.effects';
import * as ProjectResourcesActions from './project-resources.actions';
import { ProjectResourcesService } from '@bba/core-data';

import { mockProjectResourcesService, mockProjectResource } from '@bba/testing';
import { ProjectResource } from '@bba/api-interfaces';

describe('ProjectResourcesEffects', () => {
  let actions: Observable<any>;
  let effects: ProjectResourcesEffects;
  let service: ProjectResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProjectResourcesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        {
          provide: ProjectResourcesService,
          useValue: mockProjectResourcesService,
        },
      ],
    });

    effects = TestBed.inject(ProjectResourcesEffects);
    service = TestBed.inject(ProjectResourcesService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadProjectResources$', () => {
    it('should return loadProjectResourcesSuccess, on success', () => {
      const projectResources: ProjectResource[] = [];
      const action = ProjectResourcesActions.loadProjectResources();
      const outcome = ProjectResourcesActions.loadProjectResourcesSuccess({
        projectResources,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: projectResources });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadProjectResources$).toBeObservable(expected);
    });

    it('should return loadProjectResourcesFailure, on failure', () => {
      const action = ProjectResourcesActions.loadProjectResources();
      const error = new Error();
      const outcome = ProjectResourcesActions.loadProjectResourcesFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadProjectResources$).toBeObservable(expected);
    });
  });

  describe('loadProjectResource$', () => {
    it('should return success with projectResource', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.loadProjectResource({
        projectResourceId: projectResource.id,
      });
      const outcome = ProjectResourcesActions.loadProjectResourceSuccess({
        projectResource,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: projectResource });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadProjectResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.loadProjectResource({
        projectResourceId: projectResource.id,
      });
      const error = new Error();
      const outcome = ProjectResourcesActions.loadProjectResourceFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadProjectResource$).toBeObservable(expected);
    });
  });

  describe('createProjectResource$', () => {
    it('should return success with projectResource', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.createProjectResource({
        projectResource,
      });
      const outcome = ProjectResourcesActions.createProjectResourceSuccess({
        projectResource,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: projectResource });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createProjectResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.createProjectResource({
        projectResource,
      });
      const error = new Error();
      const outcome = ProjectResourcesActions.createProjectResourceFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createProjectResource$).toBeObservable(expected);
    });
  });

  describe('updateProjectResource$', () => {
    it('should return success with projectResource', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.updateProjectResource({
        projectResource,
      });
      const outcome = ProjectResourcesActions.updateProjectResourceSuccess({
        projectResource,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: projectResource });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateProjectResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.updateProjectResource({
        projectResource,
      });
      const error = new Error();
      const outcome = ProjectResourcesActions.updateProjectResourceFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateProjectResource$).toBeObservable(expected);
    });
  });

  describe('deleteProjectResource$', () => {
    it('should return success with projectResource', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.deleteProjectResource({
        projectResource,
      });
      const outcome = ProjectResourcesActions.deleteProjectResourceSuccess({
        projectResource,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: projectResource });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteProjectResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const projectResource = { ...mockProjectResource };
      const action = ProjectResourcesActions.deleteProjectResource({
        projectResource,
      });
      const error = new Error();
      const outcome = ProjectResourcesActions.deleteProjectResourceFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteProjectResource$).toBeObservable(expected);
    });
  });
});
