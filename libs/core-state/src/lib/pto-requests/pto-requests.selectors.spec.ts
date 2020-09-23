import {
  PtoRequestsState,
  ptoRequestsAdapter,
  initialPtoRequestsState,
} from './pto-requests.reducer';
import * as PtoRequestsSelectors from './pto-requests.selectors';

import { PtoRequest } from '@bba/api-interfaces';
import { mockPtoRequest } from '@bba/testing';

describe('PtoRequests Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPtoRequestsId = (it) => it['id'];
  const createPtoRequest = (id: string, name = '') =>
    ({ ...mockPtoRequest, id: id } as PtoRequest);

  let state;

  beforeEach(() => {
    state = {
      ptoRequests: ptoRequestsAdapter.setAll(
        [
          createPtoRequest('PRODUCT-AAA'),
          createPtoRequest('PRODUCT-BBB'),
          createPtoRequest('PRODUCT-CCC'),
        ],
        {
          ...initialPtoRequestsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('PtoRequests Selectors', () => {
    it('getAllPtoRequests() should return the list of PtoRequests', () => {
      const results = PtoRequestsSelectors.getAllPtoRequests(state);
      const selId = getPtoRequestsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = PtoRequestsSelectors.getSelectedPtoRequest(state);
      const selId = getPtoRequestsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getPtoRequestsLoaded() should return the current 'loaded' status", () => {
      const result = PtoRequestsSelectors.getPtoRequestsLoaded(state);

      expect(result).toBe(true);
    });

    it("getPtoRequestsError() should return the current 'error' state", () => {
      const result = PtoRequestsSelectors.getPtoRequestsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
