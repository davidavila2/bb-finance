import { DailyHourlyLog } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockDailyHourlyLogsFacade = {
  loadDailyHourlyLogs: () => {},
  selectDailyHourlyLog: () => {},
  deleteDailyHourlyLog: () => {},
  updateDailyHourlyLog: () => {},
  createDailyHourlyLog: () => {},
  mutations$: of(true),
};

export const mockDailyHourlyLogsService = {
  all: () => of([]),
  find: () => of({ ...mockDailyHourlyLog }),
  create: () => of({ ...mockDailyHourlyLog }),
  update: () => of({ ...mockDailyHourlyLog }),
  delete: () => of({ ...mockDailyHourlyLog }),
};

export const mockDailyHourlyLog = {
  id: '0',
  resourceId: 'mock',
  date: 'mock',
  hours: 1,
  ptoHours: 1,
  holidayHours: 1,
  capacityHours: 1,
};

export const mockEmptyDailyHourlyLog = {
  id: null,
  resourceId: 'mockEmpty',
  date: 'mockEmpty',
  hours: 0,
  ptoHours: 0,
  holidayHours: 0,
  capacityHours: 0,
};
