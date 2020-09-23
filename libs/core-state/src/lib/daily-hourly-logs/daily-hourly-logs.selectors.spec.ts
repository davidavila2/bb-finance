import {
  DailyHourlyLogsState,
  dailyHourlyLogsAdapter,
  initialDailyHourlyLogsState,
} from './daily-hourly-logs.reducer';
import * as DailyHourlyLogsSelectors from './daily-hourly-logs.selectors';

import { DailyHourlyLog } from '@bba/api-interfaces';
import { mockDailyHourlyLog } from '@bba/testing';

describe('DailyHourlyLogs Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDailyHourlyLogsId = (it) => it['id'];
  const createDailyHourlyLog = (id: string, name = '') =>
    ({ ...mockDailyHourlyLog, id: id } as DailyHourlyLog);

  let state;

  beforeEach(() => {
    state = {
      dailyHourlyLogs: dailyHourlyLogsAdapter.setAll(
        [
          createDailyHourlyLog('PRODUCT-AAA'),
          createDailyHourlyLog('PRODUCT-BBB'),
          createDailyHourlyLog('PRODUCT-CCC'),
        ],
        {
          ...initialDailyHourlyLogsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('DailyHourlyLogs Selectors', () => {
    it('getAllDailyHourlyLogs() should return the list of DailyHourlyLogs', () => {
      const results = DailyHourlyLogsSelectors.getAllDailyHourlyLogs(state);
      const selId = getDailyHourlyLogsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DailyHourlyLogsSelectors.getSelectedDailyHourlyLog(state);
      const selId = getDailyHourlyLogsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDailyHourlyLogsLoaded() should return the current 'loaded' status", () => {
      const result = DailyHourlyLogsSelectors.getDailyHourlyLogsLoaded(state);

      expect(result).toBe(true);
    });

    it("getDailyHourlyLogsError() should return the current 'error' state", () => {
      const result = DailyHourlyLogsSelectors.getDailyHourlyLogsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
