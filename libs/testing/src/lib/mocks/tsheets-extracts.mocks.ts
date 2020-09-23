import { TsheetsExtract } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockTsheetsExtractsFacade = {
  loadTsheetsExtracts: () => {},
  selectTsheetsExtract: () => {},
  deleteTsheetsExtract: () => {},
  updateTsheetsExtract: () => {},
  createTsheetsExtract: () => {},
  mutations$: of(true),
};

export const mockTsheetsExtractsService = {
  all: () => of([]),
  find: () => of({ ...mockTsheetsExtract }),
  create: () => of({ ...mockTsheetsExtract }),
  update: () => of({ ...mockTsheetsExtract }),
  delete: () => of({ ...mockTsheetsExtract }),
};

export const mockTsheetsExtract = {
  id: '0',
  localDate: 'mock',
  hours: 'mock',
  billable: undefined,
  jobCode: 1,
};

export const mockEmptyTsheetsExtract = {
  id: null,
  localDate: 'mockEmpty',
  hours: 'mockEmpty',
  billable: undefined,
  jobCode: 0,
};
