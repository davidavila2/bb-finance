import { Resource } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockResourcesFacade = {
  loadResources: () => {},
  selectResource: () => {},
  deleteResource: () => {},
  updateResource: () => {},
  createResource: () => {},
  mutations$: of(true),
};

export const mockResourcesService = {
  all: () => of([]),
  find: () => of({ ...mockResource }),
  create: () => of({ ...mockResource }),
  update: () => of({ ...mockResource }),
  delete: () => of({ ...mockResource }),
};

export const mockResource = {
  id: '0',
  firstName: 'mock',
  lastName: 'mock',
  firstNameAlias: 'mock',
  status: 'mock',
};

export const mockEmptyResource = {
  id: null,
  firstName: 'mockEmpty',
  lastName: 'mockEmpty',
  firstNameAlias: 'mockEmpty',
  status: 'mockEmpty',
};
