import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { ResourcesEffects } from './resources.effects';
import * as ResourcesActions from './resources.actions';
import { ResourcesService } from '@bba/core-data';

import { mockResourcesService, mockResource } from '@bba/testing';
import { Resource } from '@bba/api-interfaces';

describe('ResourcesEffects', () => {
  let actions: Observable<any>;
  let effects: ResourcesEffects;
  let service: ResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ResourcesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: ResourcesService, useValue: mockResourcesService },
      ],
    });

    effects = TestBed.inject(ResourcesEffects);
    service = TestBed.inject(ResourcesService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadResources$', () => {
    it('should return loadResourcesSuccess, on success', () => {
      const resources: Resource[] = [];
      const action = ResourcesActions.loadResources();
      const outcome = ResourcesActions.loadResourcesSuccess({ resources });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resources });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadResources$).toBeObservable(expected);
    });

    it('should return loadResourcesFailure, on failure', () => {
      const action = ResourcesActions.loadResources();
      const error = new Error();
      const outcome = ResourcesActions.loadResourcesFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadResources$).toBeObservable(expected);
    });
  });

  describe('loadResource$', () => {
    it('should return success with resource', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.loadResource({ resourceId: resource.id });
      const outcome = ResourcesActions.loadResourceSuccess({ resource });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resource });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.loadResource({ resourceId: resource.id });
      const error = new Error();
      const outcome = ResourcesActions.loadResourceFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadResource$).toBeObservable(expected);
    });
  });

  describe('createResource$', () => {
    it('should return success with resource', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.createResource({ resource });
      const outcome = ResourcesActions.createResourceSuccess({ resource });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resource });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.createResource({ resource });
      const error = new Error();
      const outcome = ResourcesActions.createResourceFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createResource$).toBeObservable(expected);
    });
  });

  describe('updateResource$', () => {
    it('should return success with resource', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.updateResource({ resource });
      const outcome = ResourcesActions.updateResourceSuccess({ resource });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resource });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.updateResource({ resource });
      const error = new Error();
      const outcome = ResourcesActions.updateResourceFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateResource$).toBeObservable(expected);
    });
  });

  describe('deleteResource$', () => {
    it('should return success with resource', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.deleteResource({ resource });
      const outcome = ResourcesActions.deleteResourceSuccess({ resource });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resource });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteResource$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resource = { ...mockResource };
      const action = ResourcesActions.deleteResource({ resource });
      const error = new Error();
      const outcome = ResourcesActions.deleteResourceFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteResource$).toBeObservable(expected);
    });
  });
});
