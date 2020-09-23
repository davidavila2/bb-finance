import {
  ResourcesState,
  resourcesAdapter,
  initialResourcesState,
} from './resources.reducer';
import * as ResourcesSelectors from './resources.selectors';

import { Resource } from '@bba/api-interfaces';
import { mockResource } from '@bba/testing';

describe('Resources Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getResourcesId = (it) => it['id'];
  const createResource = (id: string, name = '') =>
    ({ ...mockResource, id: id } as Resource);

  let state;

  beforeEach(() => {
    state = {
      resources: resourcesAdapter.setAll(
        [
          createResource('PRODUCT-AAA'),
          createResource('PRODUCT-BBB'),
          createResource('PRODUCT-CCC'),
        ],
        {
          ...initialResourcesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Resources Selectors', () => {
    it('getAllResources() should return the list of Resources', () => {
      const results = ResourcesSelectors.getAllResources(state);
      const selId = getResourcesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ResourcesSelectors.getSelectedResource(state);
      const selId = getResourcesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getResourcesLoaded() should return the current 'loaded' status", () => {
      const result = ResourcesSelectors.getResourcesLoaded(state);

      expect(result).toBe(true);
    });

    it("getResourcesError() should return the current 'error' state", () => {
      const result = ResourcesSelectors.getResourcesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
