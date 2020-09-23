import { ResourceRate } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockResourceRatesFacade = {
  loadResourceRates: () => {},
  selectResourceRate: () => {},
  deleteResourceRate: () => {},
  updateResourceRate: () => {},
  createResourceRate: () => {},
  mutations$: of(true),
};

export const mockResourceRatesService = {
  all: () => of([]),
  find: () => of({ ...mockResourceRate }),
  create: () => of({ ...mockResourceRate }),
  update: () => of({ ...mockResourceRate }),
  delete: () => of({ ...mockResourceRate }),
};

export const mockResourceRate = {
  id: '0',
  resourceLevel: 'mock',
  resourceType: 'mock',
  internalRate: 'mock',
  salary: 'mock',
  status: 'mock',
  startDate: 'mock',
  endDate: 'mock',
};

export const mockEmptyResourceRate = {
  id: null,
  resourceLevel: 'mockEmpty',
  resourceType: 'mockEmpty',
  internalRate: 'mockEmpty',
  salary: 'mockEmpty',
  status: 'mockEmpty',
  startDate: 'mockEmpty',
  endDate: 'mockEmpty',
};
