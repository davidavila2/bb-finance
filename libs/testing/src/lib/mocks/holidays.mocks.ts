import { Holiday } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockHolidaysFacade = {
  loadHolidays: () => {},
  selectHoliday: () => {},
  deleteHoliday: () => {},
  updateHoliday: () => {},
  createHoliday: () => {},
  mutations$: of(true),
};

export const mockHolidaysService = {
  all: () => of([]),
  find: () => of({ ...mockHoliday }),
  create: () => of({ ...mockHoliday }),
  update: () => of({ ...mockHoliday }),
  delete: () => of({ ...mockHoliday }),
};

export const mockHoliday = {
  id: '0',
  year: 1,
  date: 'mock',
  name: 'mock',
};

export const mockEmptyHoliday = {
  id: null,
  year: 0,
  date: 'mockEmpty',
  name: 'mockEmpty',
};
