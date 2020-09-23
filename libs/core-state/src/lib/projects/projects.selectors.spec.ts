import {
  ProjectsState,
  projectsAdapter,
  initialProjectsState,
} from './projects.reducer';
import * as ProjectsSelectors from './projects.selectors';

import { Project } from '@bba/api-interfaces';
import { mockProject } from '@bba/testing';

describe('Projects Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProjectsId = (it) => it['id'];
  const createProject = (id: string, name = '') =>
    ({ ...mockProject, id: id } as Project);

  let state;

  beforeEach(() => {
    state = {
      projects: projectsAdapter.setAll(
        [
          createProject('PRODUCT-AAA'),
          createProject('PRODUCT-BBB'),
          createProject('PRODUCT-CCC'),
        ],
        {
          ...initialProjectsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Projects Selectors', () => {
    it('getAllProjects() should return the list of Projects', () => {
      const results = ProjectsSelectors.getAllProjects(state);
      const selId = getProjectsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProjectsSelectors.getSelectedProject(state);
      const selId = getProjectsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getProjectsLoaded() should return the current 'loaded' status", () => {
      const result = ProjectsSelectors.getProjectsLoaded(state);

      expect(result).toBe(true);
    });

    it("getProjectsError() should return the current 'error' state", () => {
      const result = ProjectsSelectors.getProjectsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
