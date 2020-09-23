import * as TsheetsExtractsActions from './tsheets-extracts.actions';
import {
  TsheetsExtractsState,
  initialTsheetsExtractsState,
  tsheetsExtractsReducer,
} from './tsheets-extracts.reducer';
import { mockTsheetsExtract, mockEmptyTsheetsExtract } from '@bba/testing';

describe('TsheetsExtracts Reducer', () => {
  let tsheetsExtracts;

  beforeEach(() => {
    tsheetsExtracts = [
      { ...mockTsheetsExtract, id: '0' },
      { ...mockTsheetsExtract, id: '1' },
      { ...mockTsheetsExtract, id: '2' },
    ];
  });

  describe('valid TsheetsExtracts actions', () => {
    it('loadTsheetsExtracts should set loaded to false', () => {
      const action = TsheetsExtractsActions.loadTsheetsExtracts();
      const expectedState = {
        ...initialTsheetsExtractsState,
        error: null,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadTsheetsExtractsSuccess should set the list of known TsheetsExtracts', () => {
      const action = TsheetsExtractsActions.loadTsheetsExtractsSuccess({
        tsheetsExtracts,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: true,
        entities: {
          0: tsheetsExtracts[0],
          1: tsheetsExtracts[1],
          2: tsheetsExtracts[2],
        },
        ids: tsheetsExtracts.map((tsheetsExtract) => tsheetsExtract.id),
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadTsheetsExtractsFailure should set error to error', () => {
      const error = new Error();
      const action = TsheetsExtractsActions.loadTsheetsExtractsFailure({
        error,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        error,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadTsheetsExtract should set loaded to false', () => {
      const action = TsheetsExtractsActions.loadTsheetsExtract({
        tsheetsExtractId: mockTsheetsExtract.id,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: false,
        error: null,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadTsheetsExtractSuccess should set loaded to true', () => {
      const action = TsheetsExtractsActions.loadTsheetsExtractSuccess({
        tsheetsExtract: mockTsheetsExtract,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: true,
        entities: {
          0: mockTsheetsExtract,
        },
        ids: [mockTsheetsExtract.id],
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadTsheetsExtractFailure should set error to error', () => {
      const error = new Error();
      const action = TsheetsExtractsActions.loadTsheetsExtractFailure({
        error,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        error,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateTsheetsExtractSuccess should modify tsheetsExtract', () => {
      const prepAction = TsheetsExtractsActions.loadTsheetsExtractSuccess({
        tsheetsExtract: {
          ...mockEmptyTsheetsExtract,
          id: mockTsheetsExtract.id,
        },
      });
      const prepState: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        prepAction
      );

      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: true,
        entities: {
          0: mockTsheetsExtract,
        },
        ids: [mockTsheetsExtract.id],
      };

      const action = TsheetsExtractsActions.updateTsheetsExtractSuccess({
        tsheetsExtract: mockTsheetsExtract,
      });
      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateTsheetsExtractFailure should set error to error', () => {
      const error = new Error();
      const action = TsheetsExtractsActions.updateTsheetsExtractFailure({
        error,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        error,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createTsheetsExtractSuccess should add tsheetsExtract', () => {
      const action = TsheetsExtractsActions.createTsheetsExtractSuccess({
        tsheetsExtract: mockTsheetsExtract,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: false,
        entities: {
          0: mockTsheetsExtract,
        },
        ids: [mockTsheetsExtract.id],
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createTsheetsExtractFailure should set error to error', () => {
      const error = new Error();
      const action = TsheetsExtractsActions.createTsheetsExtractFailure({
        error,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        error,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteTsheetsExtractSuccess should add tsheetsExtract', () => {
      const prepAction = TsheetsExtractsActions.loadTsheetsExtractSuccess({
        tsheetsExtract: mockTsheetsExtract,
      });
      const prepState: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        prepAction
      );

      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: true,
      };

      const action = TsheetsExtractsActions.deleteTsheetsExtractSuccess({
        tsheetsExtract: mockTsheetsExtract,
      });
      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteTsheetsExtractFailure should set error to error', () => {
      const error = new Error();
      const action = TsheetsExtractsActions.deleteTsheetsExtractFailure({
        error,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        error,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectTsheetsExtract should set selectedId', () => {
      const action = TsheetsExtractsActions.selectTsheetsExtract({
        selectedId: mockTsheetsExtract.id,
      });
      const expectedState = {
        ...initialTsheetsExtractsState,
        selectedId: mockTsheetsExtract.id,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedTsheetsExtract should reset selectedId', () => {
      const prepAction = TsheetsExtractsActions.selectTsheetsExtract({
        selectedId: mockTsheetsExtract.id,
      });
      const prepState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        prepAction
      );

      const action = TsheetsExtractsActions.resetSelectedTsheetsExtract();
      const expectedState = {
        ...initialTsheetsExtractsState,
        selectedId: null,
      };

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetTsheetsExtracts should reset tsheetsExtracts', () => {
      const prepAction = TsheetsExtractsActions.loadTsheetsExtractsSuccess({
        tsheetsExtracts,
      });
      const prepState: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        prepAction
      );

      const expectedState = {
        ...initialTsheetsExtractsState,
        loaded: true,
      };

      const action = TsheetsExtractsActions.resetTsheetsExtracts();
      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: TsheetsExtractsState = tsheetsExtractsReducer(
        initialTsheetsExtractsState,
        action
      );

      expect(result).toBe(initialTsheetsExtractsState);
    });
  });
});
