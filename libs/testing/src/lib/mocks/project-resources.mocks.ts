import { ProjectResource } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockProjectResourcesFacade = {
  loadProjectResources: () => {},
  selectProjectResource: () => {},
  deleteProjectResource: () => {},
  updateProjectResource: () => {},
  createProjectResource: () => {},
  mutations$: of(true),
};

export const mockProjectResourcesService = {
  all: () => of([]),
  find: () => of({ ...mockProjectResource }),
  create: () => of({ ...mockProjectResource }),
  update: () => of({ ...mockProjectResource }),
  delete: () => of({ ...mockProjectResource }),
};

export const mockProjectResource = {
  id: '0',
  projectId: 'mock',
  resourceId: 'mock',
  resourceLevel: 'mock',
  resourceType: 'mock',
  executionType: 'mock',
  startDate: 'mock',
  endDate: 'mock',
  internalRate: 'mock',
  billableRate: 'mock',
  notes: 'mock',
};

export const mockEmptyProjectResource = {
  id: null,
  projectId: 'mockEmpty',
  resourceId: 'mockEmpty',
  resourceLevel: 'mockEmpty',
  resourceType: 'mockEmpty',
  executionType: 'mockEmpty',
  startDate: 'mockEmpty',
  endDate: 'mockEmpty',
  internalRate: 'mockEmpty',
  billableRate: 'mockEmpty',
  notes: 'mockEmpty',
};
