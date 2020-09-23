import { Project } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockProjectsFacade = {
  loadProjects: () => {},
  selectProject: () => {},
  deleteProject: () => {},
  updateProject: () => {},
  createProject: () => {},
  mutations$: of(true),
};

export const mockProjectsService = {
  all: () => of([]),
  find: () => of({ ...mockProject }),
  create: () => of({ ...mockProject }),
  update: () => of({ ...mockProject }),
  delete: () => of({ ...mockProject }),
};

export const mockProject = {
  id: '0',
  clientId: 'mock',
  startDate: 'mock',
  endDate: 'mock',
  status: 'mock',
  notes: 'mock',
  netTermDays: 'mock',
  billingCycle: 'mock',
  contractLengthWeeks: 'mock',
  contractLengthHours: 'mock',
  projectDiscount: 'mock',
  jobCode: 'mock',
};

export const mockEmptyProject = {
  id: null,
  clientId: 'mockEmpty',
  startDate: 'mockEmpty',
  endDate: 'mockEmpty',
  status: 'mockEmpty',
  notes: 'mockEmpty',
  netTermDays: 'mockEmpty',
  billingCycle: 'mockEmpty',
  contractLengthWeeks: 'mockEmpty',
  contractLengthHours: 'mockEmpty',
  projectDiscount: 'mockEmpty',
  jobCode: 'mockEmpty',
};
