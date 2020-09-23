import {
  ResourceRatesState,
  resourceRatesAdapter,
  initialResourceRatesState,
} from './resource-rates.reducer';
import * as ResourceRatesSelectors from './resource-rates.selectors';

import { ResourceRate } from '@bba/api-interfaces';
import { mockResourceRate } from '@bba/testing';

describe('ResourceRates Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getResourceRatesId = (it) => it['id'];
  const createResourceRate = (id: string, name = '') =>
    ({ ...mockResourceRate, id: id } as ResourceRate);

  let state;

  beforeEach(() => {
    state = {
      resourceRates: resourceRatesAdapter.setAll(
        [
          createResourceRate('PRODUCT-AAA'),
          createResourceRate('PRODUCT-BBB'),
          createResourceRate('PRODUCT-CCC'),
        ],
        {
          ...initialResourceRatesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ResourceRates Selectors', () => {
    it('getAllResourceRates() should return the list of ResourceRates', () => {
      const results = ResourceRatesSelectors.getAllResourceRates(state);
      const selId = getResourceRatesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ResourceRatesSelectors.getSelectedResourceRate(state);
      const selId = getResourceRatesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getResourceRatesLoaded() should return the current 'loaded' status", () => {
      const result = ResourceRatesSelectors.getResourceRatesLoaded(state);

      expect(result).toBe(true);
    });

    it("getResourceRatesError() should return the current 'error' state", () => {
      const result = ResourceRatesSelectors.getResourceRatesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
