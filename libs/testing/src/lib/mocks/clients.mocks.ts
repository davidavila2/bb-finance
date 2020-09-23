import { Client } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockClientsFacade = {
  loadClients: () => {},
  selectClient: () => {},
  deleteClient: () => {},
  updateClient: () => {},
  createClient: () => {},
  mutations$: of(true),
};

export const mockClientsService = {
  all: () => of([]),
  find: () => of({ ...mockClient }),
  create: () => of({ ...mockClient }),
  update: () => of({ ...mockClient }),
  delete: () => of({ ...mockClient }),
};

export const mockClient = {
  id: '0',
  name: 'mock',
  profile: 'mock',
  type: 'mock',
};

export const mockEmptyClient = {
  id: null,
  name: 'mockEmpty',
  profile: 'mockEmpty',
  type: 'mockEmpty',
};
