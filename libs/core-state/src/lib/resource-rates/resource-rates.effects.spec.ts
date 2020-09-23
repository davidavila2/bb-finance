import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { ResourceRatesEffects } from './resource-rates.effects';
import * as ResourceRatesActions from './resource-rates.actions';
import { ResourceRatesService } from '@bba/core-data';

import { mockResourceRatesService, mockResourceRate } from '@bba/testing';
import { ResourceRate } from '@bba/api-interfaces';

describe('ResourceRatesEffects', () => {
  let actions: Observable<any>;
  let effects: ResourceRatesEffects;
  let service: ResourceRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ResourceRatesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: ResourceRatesService, useValue: mockResourceRatesService },
      ],
    });

    effects = TestBed.inject(ResourceRatesEffects);
    service = TestBed.inject(ResourceRatesService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadResourceRates$', () => {
    it('should return loadResourceRatesSuccess, on success', () => {
      const resourceRates: ResourceRate[] = [];
      const action = ResourceRatesActions.loadResourceRates();
      const outcome = ResourceRatesActions.loadResourceRatesSuccess({
        resourceRates,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resourceRates });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadResourceRates$).toBeObservable(expected);
    });

    it('should return loadResourceRatesFailure, on failure', () => {
      const action = ResourceRatesActions.loadResourceRates();
      const error = new Error();
      const outcome = ResourceRatesActions.loadResourceRatesFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadResourceRates$).toBeObservable(expected);
    });
  });

  describe('loadResourceRate$', () => {
    it('should return success with resourceRate', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.loadResourceRate({
        resourceRateId: resourceRate.id,
      });
      const outcome = ResourceRatesActions.loadResourceRateSuccess({
        resourceRate,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resourceRate });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadResourceRate$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.loadResourceRate({
        resourceRateId: resourceRate.id,
      });
      const error = new Error();
      const outcome = ResourceRatesActions.loadResourceRateFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadResourceRate$).toBeObservable(expected);
    });
  });

  describe('createResourceRate$', () => {
    it('should return success with resourceRate', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.createResourceRate({ resourceRate });
      const outcome = ResourceRatesActions.createResourceRateSuccess({
        resourceRate,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resourceRate });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createResourceRate$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.createResourceRate({ resourceRate });
      const error = new Error();
      const outcome = ResourceRatesActions.createResourceRateFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createResourceRate$).toBeObservable(expected);
    });
  });

  describe('updateResourceRate$', () => {
    it('should return success with resourceRate', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.updateResourceRate({ resourceRate });
      const outcome = ResourceRatesActions.updateResourceRateSuccess({
        resourceRate,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resourceRate });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateResourceRate$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.updateResourceRate({ resourceRate });
      const error = new Error();
      const outcome = ResourceRatesActions.updateResourceRateFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateResourceRate$).toBeObservable(expected);
    });
  });

  describe('deleteResourceRate$', () => {
    it('should return success with resourceRate', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.deleteResourceRate({ resourceRate });
      const outcome = ResourceRatesActions.deleteResourceRateSuccess({
        resourceRate,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: resourceRate });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteResourceRate$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const resourceRate = { ...mockResourceRate };
      const action = ResourceRatesActions.deleteResourceRate({ resourceRate });
      const error = new Error();
      const outcome = ResourceRatesActions.deleteResourceRateFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteResourceRate$).toBeObservable(expected);
    });
  });
});
