import * as PtoRequestsActions from './pto-requests.actions';
import {
  PtoRequestsState,
  initialPtoRequestsState,
  ptoRequestsReducer,
} from './pto-requests.reducer';
import { mockPtoRequest, mockEmptyPtoRequest } from '@bba/testing';

describe('PtoRequests Reducer', () => {
  let ptoRequests;

  beforeEach(() => {
    ptoRequests = [
      { ...mockPtoRequest, id: '0' },
      { ...mockPtoRequest, id: '1' },
      { ...mockPtoRequest, id: '2' },
    ];
  });

  describe('valid PtoRequests actions', () => {
    it('loadPtoRequests should set loaded to false', () => {
      const action = PtoRequestsActions.loadPtoRequests();
      const expectedState = {
        ...initialPtoRequestsState,
        error: null,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadPtoRequestsSuccess should set the list of known PtoRequests', () => {
      const action = PtoRequestsActions.loadPtoRequestsSuccess({ ptoRequests });
      const expectedState = {
        ...initialPtoRequestsState,
        loaded: true,
        entities: {
          0: ptoRequests[0],
          1: ptoRequests[1],
          2: ptoRequests[2],
        },
        ids: ptoRequests.map((ptoRequest) => ptoRequest.id),
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadPtoRequestsFailure should set error to error', () => {
      const error = new Error();
      const action = PtoRequestsActions.loadPtoRequestsFailure({ error });
      const expectedState = {
        ...initialPtoRequestsState,
        error,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadPtoRequest should set loaded to false', () => {
      const action = PtoRequestsActions.loadPtoRequest({
        ptoRequestId: mockPtoRequest.id,
      });
      const expectedState = {
        ...initialPtoRequestsState,
        loaded: false,
        error: null,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadPtoRequestSuccess should set loaded to true', () => {
      const action = PtoRequestsActions.loadPtoRequestSuccess({
        ptoRequest: mockPtoRequest,
      });
      const expectedState = {
        ...initialPtoRequestsState,
        loaded: true,
        entities: {
          0: mockPtoRequest,
        },
        ids: [mockPtoRequest.id],
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadPtoRequestFailure should set error to error', () => {
      const error = new Error();
      const action = PtoRequestsActions.loadPtoRequestFailure({ error });
      const expectedState = {
        ...initialPtoRequestsState,
        error,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updatePtoRequestSuccess should modify ptoRequest', () => {
      const prepAction = PtoRequestsActions.loadPtoRequestSuccess({
        ptoRequest: { ...mockEmptyPtoRequest, id: mockPtoRequest.id },
      });
      const prepState: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        prepAction
      );

      const expectedState = {
        ...initialPtoRequestsState,
        loaded: true,
        entities: {
          0: mockPtoRequest,
        },
        ids: [mockPtoRequest.id],
      };

      const action = PtoRequestsActions.updatePtoRequestSuccess({
        ptoRequest: mockPtoRequest,
      });
      const result: PtoRequestsState = ptoRequestsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updatePtoRequestFailure should set error to error', () => {
      const error = new Error();
      const action = PtoRequestsActions.updatePtoRequestFailure({ error });
      const expectedState = {
        ...initialPtoRequestsState,
        error,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createPtoRequestSuccess should add ptoRequest', () => {
      const action = PtoRequestsActions.createPtoRequestSuccess({
        ptoRequest: mockPtoRequest,
      });
      const expectedState = {
        ...initialPtoRequestsState,
        loaded: false,
        entities: {
          0: mockPtoRequest,
        },
        ids: [mockPtoRequest.id],
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createPtoRequestFailure should set error to error', () => {
      const error = new Error();
      const action = PtoRequestsActions.createPtoRequestFailure({ error });
      const expectedState = {
        ...initialPtoRequestsState,
        error,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deletePtoRequestSuccess should add ptoRequest', () => {
      const prepAction = PtoRequestsActions.loadPtoRequestSuccess({
        ptoRequest: mockPtoRequest,
      });
      const prepState: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        prepAction
      );

      const expectedState = {
        ...initialPtoRequestsState,
        loaded: true,
      };

      const action = PtoRequestsActions.deletePtoRequestSuccess({
        ptoRequest: mockPtoRequest,
      });
      const result: PtoRequestsState = ptoRequestsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deletePtoRequestFailure should set error to error', () => {
      const error = new Error();
      const action = PtoRequestsActions.deletePtoRequestFailure({ error });
      const expectedState = {
        ...initialPtoRequestsState,
        error,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectPtoRequest should set selectedId', () => {
      const action = PtoRequestsActions.selectPtoRequest({
        selectedId: mockPtoRequest.id,
      });
      const expectedState = {
        ...initialPtoRequestsState,
        selectedId: mockPtoRequest.id,
      };

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedPtoRequest should reset selectedId', () => {
      const prepAction = PtoRequestsActions.selectPtoRequest({
        selectedId: mockPtoRequest.id,
      });
      const prepState = ptoRequestsReducer(initialPtoRequestsState, prepAction);

      const action = PtoRequestsActions.resetSelectedPtoRequest();
      const expectedState = {
        ...initialPtoRequestsState,
        selectedId: null,
      };

      const result: PtoRequestsState = ptoRequestsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetPtoRequests should reset ptoRequests', () => {
      const prepAction = PtoRequestsActions.loadPtoRequestsSuccess({
        ptoRequests,
      });
      const prepState: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        prepAction
      );

      const expectedState = {
        ...initialPtoRequestsState,
        loaded: true,
      };

      const action = PtoRequestsActions.resetPtoRequests();
      const result: PtoRequestsState = ptoRequestsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: PtoRequestsState = ptoRequestsReducer(
        initialPtoRequestsState,
        action
      );

      expect(result).toBe(initialPtoRequestsState);
    });
  });
});
