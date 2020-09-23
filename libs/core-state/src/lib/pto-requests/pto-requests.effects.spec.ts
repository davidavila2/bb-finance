import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { PtoRequestsEffects } from './pto-requests.effects';
import * as PtoRequestsActions from './pto-requests.actions';
import { PtoRequestsService } from '@bba/core-data';

import { mockPtoRequestsService, mockPtoRequest } from '@bba/testing';
import { PtoRequest } from '@bba/api-interfaces';

describe('PtoRequestsEffects', () => {
  let actions: Observable<any>;
  let effects: PtoRequestsEffects;
  let service: PtoRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PtoRequestsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: PtoRequestsService, useValue: mockPtoRequestsService },
      ],
    });

    effects = TestBed.inject(PtoRequestsEffects);
    service = TestBed.inject(PtoRequestsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadPtoRequests$', () => {
    it('should return loadPtoRequestsSuccess, on success', () => {
      const ptoRequests: PtoRequest[] = [];
      const action = PtoRequestsActions.loadPtoRequests();
      const outcome = PtoRequestsActions.loadPtoRequestsSuccess({
        ptoRequests,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: ptoRequests });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadPtoRequests$).toBeObservable(expected);
    });

    it('should return loadPtoRequestsFailure, on failure', () => {
      const action = PtoRequestsActions.loadPtoRequests();
      const error = new Error();
      const outcome = PtoRequestsActions.loadPtoRequestsFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadPtoRequests$).toBeObservable(expected);
    });
  });

  describe('loadPtoRequest$', () => {
    it('should return success with ptoRequest', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.loadPtoRequest({
        ptoRequestId: ptoRequest.id,
      });
      const outcome = PtoRequestsActions.loadPtoRequestSuccess({ ptoRequest });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: ptoRequest });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadPtoRequest$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.loadPtoRequest({
        ptoRequestId: ptoRequest.id,
      });
      const error = new Error();
      const outcome = PtoRequestsActions.loadPtoRequestFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadPtoRequest$).toBeObservable(expected);
    });
  });

  describe('createPtoRequest$', () => {
    it('should return success with ptoRequest', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.createPtoRequest({ ptoRequest });
      const outcome = PtoRequestsActions.createPtoRequestSuccess({
        ptoRequest,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: ptoRequest });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createPtoRequest$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.createPtoRequest({ ptoRequest });
      const error = new Error();
      const outcome = PtoRequestsActions.createPtoRequestFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createPtoRequest$).toBeObservable(expected);
    });
  });

  describe('updatePtoRequest$', () => {
    it('should return success with ptoRequest', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.updatePtoRequest({ ptoRequest });
      const outcome = PtoRequestsActions.updatePtoRequestSuccess({
        ptoRequest,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: ptoRequest });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updatePtoRequest$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.updatePtoRequest({ ptoRequest });
      const error = new Error();
      const outcome = PtoRequestsActions.updatePtoRequestFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updatePtoRequest$).toBeObservable(expected);
    });
  });

  describe('deletePtoRequest$', () => {
    it('should return success with ptoRequest', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.deletePtoRequest({ ptoRequest });
      const outcome = PtoRequestsActions.deletePtoRequestSuccess({
        ptoRequest,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: ptoRequest });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deletePtoRequest$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const ptoRequest = { ...mockPtoRequest };
      const action = PtoRequestsActions.deletePtoRequest({ ptoRequest });
      const error = new Error();
      const outcome = PtoRequestsActions.deletePtoRequestFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deletePtoRequest$).toBeObservable(expected);
    });
  });
});
