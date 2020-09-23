import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { TsheetsExtractsEffects } from './tsheets-extracts.effects';
import * as TsheetsExtractsActions from './tsheets-extracts.actions';
import { TsheetsExtractsService } from '@bba/core-data';

import { mockTsheetsExtractsService, mockTsheetsExtract } from '@bba/testing';
import { TsheetsExtract } from '@bba/api-interfaces';

describe('TsheetsExtractsEffects', () => {
  let actions: Observable<any>;
  let effects: TsheetsExtractsEffects;
  let service: TsheetsExtractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TsheetsExtractsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        {
          provide: TsheetsExtractsService,
          useValue: mockTsheetsExtractsService,
        },
      ],
    });

    effects = TestBed.inject(TsheetsExtractsEffects);
    service = TestBed.inject(TsheetsExtractsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadTsheetsExtracts$', () => {
    it('should return loadTsheetsExtractsSuccess, on success', () => {
      const tsheetsExtracts: TsheetsExtract[] = [];
      const action = TsheetsExtractsActions.loadTsheetsExtracts();
      const outcome = TsheetsExtractsActions.loadTsheetsExtractsSuccess({
        tsheetsExtracts,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tsheetsExtracts });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadTsheetsExtracts$).toBeObservable(expected);
    });

    it('should return loadTsheetsExtractsFailure, on failure', () => {
      const action = TsheetsExtractsActions.loadTsheetsExtracts();
      const error = new Error();
      const outcome = TsheetsExtractsActions.loadTsheetsExtractsFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadTsheetsExtracts$).toBeObservable(expected);
    });
  });

  describe('loadTsheetsExtract$', () => {
    it('should return success with tsheetsExtract', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.loadTsheetsExtract({
        tsheetsExtractId: tsheetsExtract.id,
      });
      const outcome = TsheetsExtractsActions.loadTsheetsExtractSuccess({
        tsheetsExtract,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tsheetsExtract });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadTsheetsExtract$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.loadTsheetsExtract({
        tsheetsExtractId: tsheetsExtract.id,
      });
      const error = new Error();
      const outcome = TsheetsExtractsActions.loadTsheetsExtractFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadTsheetsExtract$).toBeObservable(expected);
    });
  });

  describe('createTsheetsExtract$', () => {
    it('should return success with tsheetsExtract', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.createTsheetsExtract({
        tsheetsExtract,
      });
      const outcome = TsheetsExtractsActions.createTsheetsExtractSuccess({
        tsheetsExtract,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tsheetsExtract });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createTsheetsExtract$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.createTsheetsExtract({
        tsheetsExtract,
      });
      const error = new Error();
      const outcome = TsheetsExtractsActions.createTsheetsExtractFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createTsheetsExtract$).toBeObservable(expected);
    });
  });

  describe('updateTsheetsExtract$', () => {
    it('should return success with tsheetsExtract', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.updateTsheetsExtract({
        tsheetsExtract,
      });
      const outcome = TsheetsExtractsActions.updateTsheetsExtractSuccess({
        tsheetsExtract,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tsheetsExtract });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateTsheetsExtract$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.updateTsheetsExtract({
        tsheetsExtract,
      });
      const error = new Error();
      const outcome = TsheetsExtractsActions.updateTsheetsExtractFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateTsheetsExtract$).toBeObservable(expected);
    });
  });

  describe('deleteTsheetsExtract$', () => {
    it('should return success with tsheetsExtract', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.deleteTsheetsExtract({
        tsheetsExtract,
      });
      const outcome = TsheetsExtractsActions.deleteTsheetsExtractSuccess({
        tsheetsExtract,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: tsheetsExtract });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteTsheetsExtract$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const tsheetsExtract = { ...mockTsheetsExtract };
      const action = TsheetsExtractsActions.deleteTsheetsExtract({
        tsheetsExtract,
      });
      const error = new Error();
      const outcome = TsheetsExtractsActions.deleteTsheetsExtractFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteTsheetsExtract$).toBeObservable(expected);
    });
  });
});
