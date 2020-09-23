import {
  ClientsState,
  clientsAdapter,
  initialClientsState,
} from './clients.reducer';
import * as ClientsSelectors from './clients.selectors';

import { Client } from '@bba/api-interfaces';
import { mockClient } from '@bba/testing';

describe('Clients Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getClientsId = (it) => it['id'];
  const createClient = (id: string, name = '') =>
    ({ ...mockClient, id: id } as Client);

  let state;

  beforeEach(() => {
    state = {
      clients: clientsAdapter.setAll(
        [
          createClient('PRODUCT-AAA'),
          createClient('PRODUCT-BBB'),
          createClient('PRODUCT-CCC'),
        ],
        {
          ...initialClientsState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Clients Selectors', () => {
    it('getAllClients() should return the list of Clients', () => {
      const results = ClientsSelectors.getAllClients(state);
      const selId = getClientsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ClientsSelectors.getSelectedClient(state);
      const selId = getClientsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getClientsLoaded() should return the current 'loaded' status", () => {
      const result = ClientsSelectors.getClientsLoaded(state);

      expect(result).toBe(true);
    });

    it("getClientsError() should return the current 'error' state", () => {
      const result = ClientsSelectors.getClientsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
