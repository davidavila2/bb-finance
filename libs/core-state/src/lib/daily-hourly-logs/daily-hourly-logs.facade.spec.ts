import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { DailyHourlyLogsFacade } from './daily-hourly-logs.facade';
import * as DailyHourlyLogsActions from './daily-hourly-logs.actions';
import { initialDailyHourlyLogsState } from './daily-hourly-logs.reducer';

import { mockDailyHourlyLog } from '@bba/testing';

describe('DailyHourlyLogsFacade', () => {
  let facade: DailyHourlyLogsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DailyHourlyLogsFacade,
        provideMockStore({ initialState: initialDailyHourlyLogsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(DailyHourlyLogsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = DailyHourlyLogsActions.createDailyHourlyLog({
      dailyHourlyLog: mockDailyHourlyLog,
    });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(dailyHourlyLog.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectDailyHourlyLog(mockDailyHourlyLog.id);

      const action = DailyHourlyLogsActions.selectDailyHourlyLog({
        selectedId: mockDailyHourlyLog.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadDailyHourlyLogs on loadDailyHourlyLogs()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadDailyHourlyLogs();

      const action = DailyHourlyLogsActions.loadDailyHourlyLogs();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadDailyHourlyLog on loadDailyHourlyLog(dailyHourlyLog.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadDailyHourlyLog(mockDailyHourlyLog.id);

      const action = DailyHourlyLogsActions.loadDailyHourlyLog({
        dailyHourlyLogId: mockDailyHourlyLog.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createDailyHourlyLog on createDailyHourlyLog(dailyHourlyLog)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createDailyHourlyLog(mockDailyHourlyLog);

      const action = DailyHourlyLogsActions.createDailyHourlyLog({
        dailyHourlyLog: mockDailyHourlyLog,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateDailyHourlyLog on updateDailyHourlyLog(dailyHourlyLog)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateDailyHourlyLog(mockDailyHourlyLog);

      const action = DailyHourlyLogsActions.updateDailyHourlyLog({
        dailyHourlyLog: mockDailyHourlyLog,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteDailyHourlyLog(mockDailyHourlyLog);

      const action = DailyHourlyLogsActions.deleteDailyHourlyLog({
        dailyHourlyLog: mockDailyHourlyLog,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
