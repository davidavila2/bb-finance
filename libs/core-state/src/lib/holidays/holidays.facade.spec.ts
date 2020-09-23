import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { HolidaysFacade } from './holidays.facade';
import * as HolidaysActions from './holidays.actions';
import { initialHolidaysState } from './holidays.reducer';

import { mockHoliday } from '@bba/testing';

describe('HolidaysFacade', () => {
  let facade: HolidaysFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HolidaysFacade,
        provideMockStore({ initialState: initialHolidaysState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(HolidaysFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = HolidaysActions.createHoliday({ holiday: mockHoliday });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(holiday.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectHoliday(mockHoliday.id);

      const action = HolidaysActions.selectHoliday({
        selectedId: mockHoliday.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadHolidays on loadHolidays()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadHolidays();

      const action = HolidaysActions.loadHolidays();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadHoliday on loadHoliday(holiday.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadHoliday(mockHoliday.id);

      const action = HolidaysActions.loadHoliday({ holidayId: mockHoliday.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createHoliday on createHoliday(holiday)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createHoliday(mockHoliday);

      const action = HolidaysActions.createHoliday({ holiday: mockHoliday });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateHoliday on updateHoliday(holiday)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateHoliday(mockHoliday);

      const action = HolidaysActions.updateHoliday({ holiday: mockHoliday });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteHoliday(mockHoliday);

      const action = HolidaysActions.deleteHoliday({ holiday: mockHoliday });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
