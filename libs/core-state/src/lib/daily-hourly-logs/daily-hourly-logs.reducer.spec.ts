import * as DailyHourlyLogsActions from './daily-hourly-logs.actions';
import {
  DailyHourlyLogsState,
  initialDailyHourlyLogsState,
  dailyHourlyLogsReducer,
} from './daily-hourly-logs.reducer';
import { mockDailyHourlyLog, mockEmptyDailyHourlyLog } from '@bba/testing';

describe('DailyHourlyLogs Reducer', () => {
  let dailyHourlyLogs;

  beforeEach(() => {
    dailyHourlyLogs = [
      { ...mockDailyHourlyLog, id: '0' },
      { ...mockDailyHourlyLog, id: '1' },
      { ...mockDailyHourlyLog, id: '2' },
    ];
  });

  describe('valid DailyHourlyLogs actions', () => {
    it('loadDailyHourlyLogs should set loaded to false', () => {
      const action = DailyHourlyLogsActions.loadDailyHourlyLogs();
      const expectedState = {
        ...initialDailyHourlyLogsState,
        error: null,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadDailyHourlyLogsSuccess should set the list of known DailyHourlyLogs', () => {
      const action = DailyHourlyLogsActions.loadDailyHourlyLogsSuccess({
        dailyHourlyLogs,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: true,
        entities: {
          0: dailyHourlyLogs[0],
          1: dailyHourlyLogs[1],
          2: dailyHourlyLogs[2],
        },
        ids: dailyHourlyLogs.map((dailyHourlyLog) => dailyHourlyLog.id),
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadDailyHourlyLogsFailure should set error to error', () => {
      const error = new Error();
      const action = DailyHourlyLogsActions.loadDailyHourlyLogsFailure({
        error,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        error,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadDailyHourlyLog should set loaded to false', () => {
      const action = DailyHourlyLogsActions.loadDailyHourlyLog({
        dailyHourlyLogId: mockDailyHourlyLog.id,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: false,
        error: null,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadDailyHourlyLogSuccess should set loaded to true', () => {
      const action = DailyHourlyLogsActions.loadDailyHourlyLogSuccess({
        dailyHourlyLog: mockDailyHourlyLog,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: true,
        entities: {
          0: mockDailyHourlyLog,
        },
        ids: [mockDailyHourlyLog.id],
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadDailyHourlyLogFailure should set error to error', () => {
      const error = new Error();
      const action = DailyHourlyLogsActions.loadDailyHourlyLogFailure({
        error,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        error,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateDailyHourlyLogSuccess should modify dailyHourlyLog', () => {
      const prepAction = DailyHourlyLogsActions.loadDailyHourlyLogSuccess({
        dailyHourlyLog: {
          ...mockEmptyDailyHourlyLog,
          id: mockDailyHourlyLog.id,
        },
      });
      const prepState: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        prepAction
      );

      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: true,
        entities: {
          0: mockDailyHourlyLog,
        },
        ids: [mockDailyHourlyLog.id],
      };

      const action = DailyHourlyLogsActions.updateDailyHourlyLogSuccess({
        dailyHourlyLog: mockDailyHourlyLog,
      });
      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateDailyHourlyLogFailure should set error to error', () => {
      const error = new Error();
      const action = DailyHourlyLogsActions.updateDailyHourlyLogFailure({
        error,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        error,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createDailyHourlyLogSuccess should add dailyHourlyLog', () => {
      const action = DailyHourlyLogsActions.createDailyHourlyLogSuccess({
        dailyHourlyLog: mockDailyHourlyLog,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: false,
        entities: {
          0: mockDailyHourlyLog,
        },
        ids: [mockDailyHourlyLog.id],
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createDailyHourlyLogFailure should set error to error', () => {
      const error = new Error();
      const action = DailyHourlyLogsActions.createDailyHourlyLogFailure({
        error,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        error,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteDailyHourlyLogSuccess should add dailyHourlyLog', () => {
      const prepAction = DailyHourlyLogsActions.loadDailyHourlyLogSuccess({
        dailyHourlyLog: mockDailyHourlyLog,
      });
      const prepState: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        prepAction
      );

      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: true,
      };

      const action = DailyHourlyLogsActions.deleteDailyHourlyLogSuccess({
        dailyHourlyLog: mockDailyHourlyLog,
      });
      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteDailyHourlyLogFailure should set error to error', () => {
      const error = new Error();
      const action = DailyHourlyLogsActions.deleteDailyHourlyLogFailure({
        error,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        error,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectDailyHourlyLog should set selectedId', () => {
      const action = DailyHourlyLogsActions.selectDailyHourlyLog({
        selectedId: mockDailyHourlyLog.id,
      });
      const expectedState = {
        ...initialDailyHourlyLogsState,
        selectedId: mockDailyHourlyLog.id,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedDailyHourlyLog should reset selectedId', () => {
      const prepAction = DailyHourlyLogsActions.selectDailyHourlyLog({
        selectedId: mockDailyHourlyLog.id,
      });
      const prepState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        prepAction
      );

      const action = DailyHourlyLogsActions.resetSelectedDailyHourlyLog();
      const expectedState = {
        ...initialDailyHourlyLogsState,
        selectedId: null,
      };

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetDailyHourlyLogs should reset dailyHourlyLogs', () => {
      const prepAction = DailyHourlyLogsActions.loadDailyHourlyLogsSuccess({
        dailyHourlyLogs,
      });
      const prepState: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        prepAction
      );

      const expectedState = {
        ...initialDailyHourlyLogsState,
        loaded: true,
      };

      const action = DailyHourlyLogsActions.resetDailyHourlyLogs();
      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: DailyHourlyLogsState = dailyHourlyLogsReducer(
        initialDailyHourlyLogsState,
        action
      );

      expect(result).toBe(initialDailyHourlyLogsState);
    });
  });
});
