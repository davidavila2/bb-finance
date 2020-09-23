import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { ProjectsEffects } from './projects.effects';
import * as ProjectsActions from './projects.actions';
import { ProjectsService } from '@bba/core-data';

import { mockProjectsService, mockProject } from '@bba/testing';
import { Project } from '@bba/api-interfaces';

describe('ProjectsEffects', () => {
  let actions: Observable<any>;
  let effects: ProjectsEffects;
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProjectsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: ProjectsService, useValue: mockProjectsService },
      ],
    });

    effects = TestBed.inject(ProjectsEffects);
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadProjects$', () => {
    it('should return loadProjectsSuccess, on success', () => {
      const projects: Project[] = [];
      const action = ProjectsActions.loadProjects();
      const outcome = ProjectsActions.loadProjectsSuccess({ projects });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: projects });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadProjects$).toBeObservable(expected);
    });

    it('should return loadProjectsFailure, on failure', () => {
      const action = ProjectsActions.loadProjects();
      const error = new Error();
      const outcome = ProjectsActions.loadProjectsFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadProjects$).toBeObservable(expected);
    });
  });

  describe('loadProject$', () => {
    it('should return success with project', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.loadProject({ projectId: project.id });
      const outcome = ProjectsActions.loadProjectSuccess({ project });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: project });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadProject$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.loadProject({ projectId: project.id });
      const error = new Error();
      const outcome = ProjectsActions.loadProjectFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadProject$).toBeObservable(expected);
    });
  });

  describe('createProject$', () => {
    it('should return success with project', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.createProject({ project });
      const outcome = ProjectsActions.createProjectSuccess({ project });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: project });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createProject$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.createProject({ project });
      const error = new Error();
      const outcome = ProjectsActions.createProjectFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createProject$).toBeObservable(expected);
    });
  });

  describe('updateProject$', () => {
    it('should return success with project', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.updateProject({ project });
      const outcome = ProjectsActions.updateProjectSuccess({ project });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: project });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateProject$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.updateProject({ project });
      const error = new Error();
      const outcome = ProjectsActions.updateProjectFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateProject$).toBeObservable(expected);
    });
  });

  describe('deleteProject$', () => {
    it('should return success with project', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.deleteProject({ project });
      const outcome = ProjectsActions.deleteProjectSuccess({ project });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: project });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteProject$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const project = { ...mockProject };
      const action = ProjectsActions.deleteProject({ project });
      const error = new Error();
      const outcome = ProjectsActions.deleteProjectFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteProject$).toBeObservable(expected);
    });
  });
});
