import {
  ProjectResourcesState,
  projectResourcesAdapter,
  initialProjectResourcesState,
} from './project-resources.reducer';
import * as ProjectResourcesSelectors from './project-resources.selectors';

import { ProjectResource } from '@bba/api-interfaces';
import { mockProjectResource } from '@bba/testing';

describe('ProjectResources Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProjectResourcesId = (it) => it['id'];
  const createProjectResource = (id: string, name = '') =>
    ({ ...mockProjectResource, id: id } as ProjectResource);

  let state;

  beforeEach(() => {
    state = {
      projectResources: projectResourcesAdapter.setAll(
        [
          createProjectResource('PRODUCT-AAA'),
          createProjectResource('PRODUCT-BBB'),
          createProjectResource('PRODUCT-CCC'),
        ],
        {
          ...initialProjectResourcesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ProjectResources Selectors', () => {
    it('getAllProjectResources() should return the list of ProjectResources', () => {
      const results = ProjectResourcesSelectors.getAllProjectResources(state);
      const selId = getProjectResourcesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProjectResourcesSelectors.getSelectedProjectResource(
        state
      );
      const selId = getProjectResourcesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getProjectResourcesLoaded() should return the current 'loaded' status", () => {
      const result = ProjectResourcesSelectors.getProjectResourcesLoaded(state);

      expect(result).toBe(true);
    });

    it("getProjectResourcesError() should return the current 'error' state", () => {
      const result = ProjectResourcesSelectors.getProjectResourcesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
