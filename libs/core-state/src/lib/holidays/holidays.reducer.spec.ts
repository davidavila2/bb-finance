import * as HolidaysActions from './holidays.actions';
import {
  HolidaysState,
  initialHolidaysState,
  holidaysReducer,
} from './holidays.reducer';
import { mockHoliday, mockEmptyHoliday } from '@bba/testing';

describe('Holidays Reducer', () => {
  let holidays;

  beforeEach(() => {
    holidays = [
      { ...mockHoliday, id: '0' },
      { ...mockHoliday, id: '1' },
      { ...mockHoliday, id: '2' },
    ];
  });

  describe('valid Holidays actions', () => {
    it('loadHolidays should set loaded to false', () => {
      const action = HolidaysActions.loadHolidays();
      const expectedState = {
        ...initialHolidaysState,
        error: null,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadHolidaysSuccess should set the list of known Holidays', () => {
      const action = HolidaysActions.loadHolidaysSuccess({ holidays });
      const expectedState = {
        ...initialHolidaysState,
        loaded: true,
        entities: {
          0: holidays[0],
          1: holidays[1],
          2: holidays[2],
        },
        ids: holidays.map((holiday) => holiday.id),
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadHolidaysFailure should set error to error', () => {
      const error = new Error();
      const action = HolidaysActions.loadHolidaysFailure({ error });
      const expectedState = {
        ...initialHolidaysState,
        error,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadHoliday should set loaded to false', () => {
      const action = HolidaysActions.loadHoliday({ holidayId: mockHoliday.id });
      const expectedState = {
        ...initialHolidaysState,
        loaded: false,
        error: null,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadHolidaySuccess should set loaded to true', () => {
      const action = HolidaysActions.loadHolidaySuccess({
        holiday: mockHoliday,
      });
      const expectedState = {
        ...initialHolidaysState,
        loaded: true,
        entities: {
          0: mockHoliday,
        },
        ids: [mockHoliday.id],
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadHolidayFailure should set error to error', () => {
      const error = new Error();
      const action = HolidaysActions.loadHolidayFailure({ error });
      const expectedState = {
        ...initialHolidaysState,
        error,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateHolidaySuccess should modify holiday', () => {
      const prepAction = HolidaysActions.loadHolidaySuccess({
        holiday: { ...mockEmptyHoliday, id: mockHoliday.id },
      });
      const prepState: HolidaysState = holidaysReducer(
        initialHolidaysState,
        prepAction
      );

      const expectedState = {
        ...initialHolidaysState,
        loaded: true,
        entities: {
          0: mockHoliday,
        },
        ids: [mockHoliday.id],
      };

      const action = HolidaysActions.updateHolidaySuccess({
        holiday: mockHoliday,
      });
      const result: HolidaysState = holidaysReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateHolidayFailure should set error to error', () => {
      const error = new Error();
      const action = HolidaysActions.updateHolidayFailure({ error });
      const expectedState = {
        ...initialHolidaysState,
        error,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createHolidaySuccess should add holiday', () => {
      const action = HolidaysActions.createHolidaySuccess({
        holiday: mockHoliday,
      });
      const expectedState = {
        ...initialHolidaysState,
        loaded: false,
        entities: {
          0: mockHoliday,
        },
        ids: [mockHoliday.id],
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createHolidayFailure should set error to error', () => {
      const error = new Error();
      const action = HolidaysActions.createHolidayFailure({ error });
      const expectedState = {
        ...initialHolidaysState,
        error,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteHolidaySuccess should add holiday', () => {
      const prepAction = HolidaysActions.loadHolidaySuccess({
        holiday: mockHoliday,
      });
      const prepState: HolidaysState = holidaysReducer(
        initialHolidaysState,
        prepAction
      );

      const expectedState = {
        ...initialHolidaysState,
        loaded: true,
      };

      const action = HolidaysActions.deleteHolidaySuccess({
        holiday: mockHoliday,
      });
      const result: HolidaysState = holidaysReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteHolidayFailure should set error to error', () => {
      const error = new Error();
      const action = HolidaysActions.deleteHolidayFailure({ error });
      const expectedState = {
        ...initialHolidaysState,
        error,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectHoliday should set selectedId', () => {
      const action = HolidaysActions.selectHoliday({
        selectedId: mockHoliday.id,
      });
      const expectedState = {
        ...initialHolidaysState,
        selectedId: mockHoliday.id,
      };

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedHoliday should reset selectedId', () => {
      const prepAction = HolidaysActions.selectHoliday({
        selectedId: mockHoliday.id,
      });
      const prepState = holidaysReducer(initialHolidaysState, prepAction);

      const action = HolidaysActions.resetSelectedHoliday();
      const expectedState = {
        ...initialHolidaysState,
        selectedId: null,
      };

      const result: HolidaysState = holidaysReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetHolidays should reset holidays', () => {
      const prepAction = HolidaysActions.loadHolidaysSuccess({ holidays });
      const prepState: HolidaysState = holidaysReducer(
        initialHolidaysState,
        prepAction
      );

      const expectedState = {
        ...initialHolidaysState,
        loaded: true,
      };

      const action = HolidaysActions.resetHolidays();
      const result: HolidaysState = holidaysReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: HolidaysState = holidaysReducer(
        initialHolidaysState,
        action
      );

      expect(result).toBe(initialHolidaysState);
    });
  });
});
