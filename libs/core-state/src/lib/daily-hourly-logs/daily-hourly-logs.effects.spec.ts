import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { DailyHourlyLogsEffects } from './daily-hourly-logs.effects';
import * as DailyHourlyLogsActions from './daily-hourly-logs.actions';
import { DailyHourlyLogsService } from '@bba/core-data';

import { mockDailyHourlyLogsService, mockDailyHourlyLog } from '@bba/testing';
import { DailyHourlyLog } from '@bba/api-interfaces';

describe('DailyHourlyLogsEffects', () => {
  let actions: Observable<any>;
  let effects: DailyHourlyLogsEffects;
  let service: DailyHourlyLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DailyHourlyLogsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        {
          provide: DailyHourlyLogsService,
          useValue: mockDailyHourlyLogsService,
        },
      ],
    });

    effects = TestBed.inject(DailyHourlyLogsEffects);
    service = TestBed.inject(DailyHourlyLogsService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadDailyHourlyLogs$', () => {
    it('should return loadDailyHourlyLogsSuccess, on success', () => {
      const dailyHourlyLogs: DailyHourlyLog[] = [];
      const action = DailyHourlyLogsActions.loadDailyHourlyLogs();
      const outcome = DailyHourlyLogsActions.loadDailyHourlyLogsSuccess({
        dailyHourlyLogs,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: dailyHourlyLogs });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadDailyHourlyLogs$).toBeObservable(expected);
    });

    it('should return loadDailyHourlyLogsFailure, on failure', () => {
      const action = DailyHourlyLogsActions.loadDailyHourlyLogs();
      const error = new Error();
      const outcome = DailyHourlyLogsActions.loadDailyHourlyLogsFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadDailyHourlyLogs$).toBeObservable(expected);
    });
  });

  describe('loadDailyHourlyLog$', () => {
    it('should return success with dailyHourlyLog', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.loadDailyHourlyLog({
        dailyHourlyLogId: dailyHourlyLog.id,
      });
      const outcome = DailyHourlyLogsActions.loadDailyHourlyLogSuccess({
        dailyHourlyLog,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: dailyHourlyLog });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadDailyHourlyLog$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.loadDailyHourlyLog({
        dailyHourlyLogId: dailyHourlyLog.id,
      });
      const error = new Error();
      const outcome = DailyHourlyLogsActions.loadDailyHourlyLogFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadDailyHourlyLog$).toBeObservable(expected);
    });
  });

  describe('createDailyHourlyLog$', () => {
    it('should return success with dailyHourlyLog', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.createDailyHourlyLog({
        dailyHourlyLog,
      });
      const outcome = DailyHourlyLogsActions.createDailyHourlyLogSuccess({
        dailyHourlyLog,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: dailyHourlyLog });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createDailyHourlyLog$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.createDailyHourlyLog({
        dailyHourlyLog,
      });
      const error = new Error();
      const outcome = DailyHourlyLogsActions.createDailyHourlyLogFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createDailyHourlyLog$).toBeObservable(expected);
    });
  });

  describe('updateDailyHourlyLog$', () => {
    it('should return success with dailyHourlyLog', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.updateDailyHourlyLog({
        dailyHourlyLog,
      });
      const outcome = DailyHourlyLogsActions.updateDailyHourlyLogSuccess({
        dailyHourlyLog,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: dailyHourlyLog });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateDailyHourlyLog$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.updateDailyHourlyLog({
        dailyHourlyLog,
      });
      const error = new Error();
      const outcome = DailyHourlyLogsActions.updateDailyHourlyLogFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateDailyHourlyLog$).toBeObservable(expected);
    });
  });

  describe('deleteDailyHourlyLog$', () => {
    it('should return success with dailyHourlyLog', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.deleteDailyHourlyLog({
        dailyHourlyLog,
      });
      const outcome = DailyHourlyLogsActions.deleteDailyHourlyLogSuccess({
        dailyHourlyLog,
      });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: dailyHourlyLog });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteDailyHourlyLog$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const dailyHourlyLog = { ...mockDailyHourlyLog };
      const action = DailyHourlyLogsActions.deleteDailyHourlyLog({
        dailyHourlyLog,
      });
      const error = new Error();
      const outcome = DailyHourlyLogsActions.deleteDailyHourlyLogFailure({
        error,
      });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteDailyHourlyLog$).toBeObservable(expected);
    });
  });
});
