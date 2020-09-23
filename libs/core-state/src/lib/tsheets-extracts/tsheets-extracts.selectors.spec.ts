import {
  TsheetsExtractsState,
  tsheetsExtractsAdapter,
  initialTsheetsExtractsState,
} from './tsheets-extracts.reducer';
import * as TsheetsExtractsSelectors from './tsheets-extracts.selectors';

import { TsheetsExtract } from '@bba/api-interfaces';
import { mockTsheetsExtract } from '@bba/testing';

describe('TsheetsExtracts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTsheetsExtractsId = (it) => it['id'];
  const createTsheetsExtract = (id: string, name = '') =>
    ({ ...mockTsheetsExtract, id: id } as TsheetsExtract);

  let state;

  beforeEach(() => {
    state = {
      tsheetsExtracts: tsheetsExtractsAdapter.setAll(
        [
          createTsheetsExtract('PRODUCT-AAA'),
          createTsheetsExtract('PRODUCT-BBB'),
          createTsheetsExtract('PRODUCT-CCC'),
        ],
        {
          ...initialTsheetsExtractsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('TsheetsExtracts Selectors', () => {
    it('getAllTsheetsExtracts() should return the list of TsheetsExtracts', () => {
      const results = TsheetsExtractsSelectors.getAllTsheetsExtracts(state);
      const selId = getTsheetsExtractsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TsheetsExtractsSelectors.getSelectedTsheetsExtract(state);
      const selId = getTsheetsExtractsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getTsheetsExtractsLoaded() should return the current 'loaded' status", () => {
      const result = TsheetsExtractsSelectors.getTsheetsExtractsLoaded(state);

      expect(result).toBe(true);
    });

    it("getTsheetsExtractsError() should return the current 'error' state", () => {
      const result = TsheetsExtractsSelectors.getTsheetsExtractsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
