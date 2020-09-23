import * as ClientsActions from './clients.actions';
import {
  ClientsState,
  initialClientsState,
  clientsReducer,
} from './clients.reducer';
import { mockClient, mockEmptyClient } from '@bba/testing';

describe('Clients Reducer', () => {
  let clients;

  beforeEach(() => {
    clients = [
      { ...mockClient, id: '0' },
      { ...mockClient, id: '1' },
      { ...mockClient, id: '2' },
    ];
  });

  describe('valid Clients actions', () => {
    it('loadClients should set loaded to false', () => {
      const action = ClientsActions.loadClients();
      const expectedState = {
        ...initialClientsState,
        error: null,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadClientsSuccess should set the list of known Clients', () => {
      const action = ClientsActions.loadClientsSuccess({ clients });
      const expectedState = {
        ...initialClientsState,
        loaded: true,
        entities: {
          0: clients[0],
          1: clients[1],
          2: clients[2],
        },
        ids: clients.map((client) => client.id),
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadClientsFailure should set error to error', () => {
      const error = new Error();
      const action = ClientsActions.loadClientsFailure({ error });
      const expectedState = {
        ...initialClientsState,
        error,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadClient should set loaded to false', () => {
      const action = ClientsActions.loadClient({ clientId: mockClient.id });
      const expectedState = {
        ...initialClientsState,
        loaded: false,
        error: null,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadClientSuccess should set loaded to true', () => {
      const action = ClientsActions.loadClientSuccess({ client: mockClient });
      const expectedState = {
        ...initialClientsState,
        loaded: true,
        entities: {
          0: mockClient,
        },
        ids: [mockClient.id],
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('loadClientFailure should set error to error', () => {
      const error = new Error();
      const action = ClientsActions.loadClientFailure({ error });
      const expectedState = {
        ...initialClientsState,
        error,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateClientSuccess should modify client', () => {
      const prepAction = ClientsActions.loadClientSuccess({
        client: { ...mockEmptyClient, id: mockClient.id },
      });
      const prepState: ClientsState = clientsReducer(
        initialClientsState,
        prepAction
      );

      const expectedState = {
        ...initialClientsState,
        loaded: true,
        entities: {
          0: mockClient,
        },
        ids: [mockClient.id],
      };

      const action = ClientsActions.updateClientSuccess({ client: mockClient });
      const result: ClientsState = clientsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateClientFailure should set error to error', () => {
      const error = new Error();
      const action = ClientsActions.updateClientFailure({ error });
      const expectedState = {
        ...initialClientsState,
        error,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createClientSuccess should add client', () => {
      const action = ClientsActions.createClientSuccess({ client: mockClient });
      const expectedState = {
        ...initialClientsState,
        loaded: false,
        entities: {
          0: mockClient,
        },
        ids: [mockClient.id],
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('createClientFailure should set error to error', () => {
      const error = new Error();
      const action = ClientsActions.createClientFailure({ error });
      const expectedState = {
        ...initialClientsState,
        error,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteClientSuccess should add client', () => {
      const prepAction = ClientsActions.loadClientSuccess({
        client: mockClient,
      });
      const prepState: ClientsState = clientsReducer(
        initialClientsState,
        prepAction
      );

      const expectedState = {
        ...initialClientsState,
        loaded: true,
      };

      const action = ClientsActions.deleteClientSuccess({ client: mockClient });
      const result: ClientsState = clientsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteClientFailure should set error to error', () => {
      const error = new Error();
      const action = ClientsActions.deleteClientFailure({ error });
      const expectedState = {
        ...initialClientsState,
        error,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('selectClient should set selectedId', () => {
      const action = ClientsActions.selectClient({ selectedId: mockClient.id });
      const expectedState = {
        ...initialClientsState,
        selectedId: mockClient.id,
      };

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedClient should reset selectedId', () => {
      const prepAction = ClientsActions.selectClient({
        selectedId: mockClient.id,
      });
      const prepState = clientsReducer(initialClientsState, prepAction);

      const action = ClientsActions.resetSelectedClient();
      const expectedState = {
        ...initialClientsState,
        selectedId: null,
      };

      const result: ClientsState = clientsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetClients should reset clients', () => {
      const prepAction = ClientsActions.loadClientsSuccess({ clients });
      const prepState: ClientsState = clientsReducer(
        initialClientsState,
        prepAction
      );

      const expectedState = {
        ...initialClientsState,
        loaded: true,
      };

      const action = ClientsActions.resetClients();
      const result: ClientsState = clientsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: ClientsState = clientsReducer(initialClientsState, action);

      expect(result).toBe(initialClientsState);
    });
  });
});
