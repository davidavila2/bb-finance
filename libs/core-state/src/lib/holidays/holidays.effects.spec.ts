import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { Observable } from 'rxjs';

import { HolidaysEffects } from './holidays.effects';
import * as HolidaysActions from './holidays.actions';
import { HolidaysService } from '@bba/core-data';

import { mockHolidaysService, mockHoliday } from '@bba/testing';
import { Holiday } from '@bba/api-interfaces';

describe('HolidaysEffects', () => {
  let actions: Observable<any>;
  let effects: HolidaysEffects;
  let service: HolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HolidaysEffects,
        DataPersistence,
        provideMockActions(() => actions),
        { provide: HolidaysService, useValue: mockHolidaysService },
      ],
    });

    effects = TestBed.inject(HolidaysEffects);
    service = TestBed.inject(HolidaysService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadHolidays$', () => {
    it('should return loadHolidaysSuccess, on success', () => {
      const holidays: Holiday[] = [];
      const action = HolidaysActions.loadHolidays();
      const outcome = HolidaysActions.loadHolidaysSuccess({ holidays });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: holidays });
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadHolidays$).toBeObservable(expected);
    });

    it('should return loadHolidaysFailure, on failure', () => {
      const action = HolidaysActions.loadHolidays();
      const error = new Error();
      const outcome = HolidaysActions.loadHolidaysFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.all = jest.fn(() => response);

      expect(effects.loadHolidays$).toBeObservable(expected);
    });
  });

  describe('loadHoliday$', () => {
    it('should return success with holiday', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.loadHoliday({ holidayId: holiday.id });
      const outcome = HolidaysActions.loadHolidaySuccess({ holiday });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: holiday });
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadHoliday$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.loadHoliday({ holidayId: holiday.id });
      const error = new Error();
      const outcome = HolidaysActions.loadHolidayFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.find = jest.fn(() => response);

      expect(effects.loadHoliday$).toBeObservable(expected);
    });
  });

  describe('createHoliday$', () => {
    it('should return success with holiday', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.createHoliday({ holiday });
      const outcome = HolidaysActions.createHolidaySuccess({ holiday });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: holiday });
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createHoliday$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.createHoliday({ holiday });
      const error = new Error();
      const outcome = HolidaysActions.createHolidayFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.create = jest.fn(() => response);

      expect(effects.createHoliday$).toBeObservable(expected);
    });
  });

  describe('updateHoliday$', () => {
    it('should return success with holiday', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.updateHoliday({ holiday });
      const outcome = HolidaysActions.updateHolidaySuccess({ holiday });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: holiday });
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateHoliday$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.updateHoliday({ holiday });
      const error = new Error();
      const outcome = HolidaysActions.updateHolidayFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.update = jest.fn(() => response);

      expect(effects.updateHoliday$).toBeObservable(expected);
    });
  });

  describe('deleteHoliday$', () => {
    it('should return success with holiday', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.deleteHoliday({ holiday });
      const outcome = HolidaysActions.deleteHolidaySuccess({ holiday });

      actions = hot('-a', { a: action });
      const response = cold('-a|', { a: holiday });
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteHoliday$).toBeObservable(expected);
    });

    it('should return failure', () => {
      const holiday = { ...mockHoliday };
      const action = HolidaysActions.deleteHoliday({ holiday });
      const error = new Error();
      const outcome = HolidaysActions.deleteHolidayFailure({ error });

      actions = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('--b', { b: outcome });
      service.delete = jest.fn(() => response);

      expect(effects.deleteHoliday$).toBeObservable(expected);
    });
  });
});
