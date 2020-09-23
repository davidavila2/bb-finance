import {
  HolidaysState,
  holidaysAdapter,
  initialHolidaysState,
} from './holidays.reducer';
import * as HolidaysSelectors from './holidays.selectors';

import { Holiday } from '@bba/api-interfaces';
import { mockHoliday } from '@bba/testing';

describe('Holidays Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHolidaysId = (it) => it['id'];
  const createHoliday = (id: string, name = '') =>
    ({ ...mockHoliday, id: id } as Holiday);

  let state;

  beforeEach(() => {
    state = {
      holidays: holidaysAdapter.setAll(
        [
          createHoliday('PRODUCT-AAA'),
          createHoliday('PRODUCT-BBB'),
          createHoliday('PRODUCT-CCC'),
        ],
        {
          ...initialHolidaysState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Holidays Selectors', () => {
    it('getAllHolidays() should return the list of Holidays', () => {
      const results = HolidaysSelectors.getAllHolidays(state);
      const selId = getHolidaysId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HolidaysSelectors.getSelectedHoliday(state);
      const selId = getHolidaysId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHolidaysLoaded() should return the current 'loaded' status", () => {
      const result = HolidaysSelectors.getHolidaysLoaded(state);

      expect(result).toBe(true);
    });

    it("getHolidaysError() should return the current 'error' state", () => {
      const result = HolidaysSelectors.getHolidaysError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
