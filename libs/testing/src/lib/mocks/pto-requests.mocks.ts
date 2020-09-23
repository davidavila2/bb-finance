import { PtoRequest } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockPtoRequestsFacade = {
  loadPtoRequests: () => {},
  selectPtoRequest: () => {},
  deletePtoRequest: () => {},
  updatePtoRequest: () => {},
  createPtoRequest: () => {},
  mutations$: of(true),
};

export const mockPtoRequestsService = {
  all: () => of([]),
  find: () => of({ ...mockPtoRequest }),
  create: () => of({ ...mockPtoRequest }),
  update: () => of({ ...mockPtoRequest }),
  delete: () => of({ ...mockPtoRequest }),
};

export const mockPtoRequest = {
  id: '0',
  resourceId: 'mock',
  date: 'mock',
  hours: 1,
};

export const mockEmptyPtoRequest = {
  id: null,
  resourceId: 'mockEmpty',
  date: 'mockEmpty',
  hours: 0,
};
