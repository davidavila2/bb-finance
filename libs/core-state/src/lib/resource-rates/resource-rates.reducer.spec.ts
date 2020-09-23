import * as ResourceRatesActions from './resource-rates.actions';
import {
  ResourceRatesState,
  initialResourceRatesState,
  resourceRatesReducer,
} from './resource-rates.reducer';
import { mockResourceRate, mockEmptyResourceRate } from '@bba/testing';

describe('ResourceRates Reducer', () => {
  let resourceRates;

  beforeEach(() => {
    resourceRates = [
      { ...mockResourceRate, id: '0' },
      { ...mockResourceRate, id: '1' },
      { ...mockResourceRate, id: '2' },
    ];
  });

  describe('valid ResourceRates actions', () => {
    it('loadResourceRates should set loaded to false', () => {
      const action = ResourceRatesActions.loadResourceRates();
      const expectedState = {
        ...initialResourceRatesState,
        error: null,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceRatesSuccess should set the list of known ResourceRates', () => {
      const action = ResourceRatesActions.loadResourceRatesSuccess({
        resourceRates,
      });
      const expectedState = {
        ...initialResourceRatesState,
        loaded: true,
        entities: {
          0: resourceRates[0],
          1: resourceRates[1],
          2: resourceRates[2],
        },
        ids: resourceRates.map((resourceRate) => resourceRate.id),
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceRatesFailure should set error to error', () => {
      const error = new Error();
      const action = ResourceRatesActions.loadResourceRatesFailure({ error });
      const expectedState = {
        ...initialResourceRatesState,
        error,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceRate should set loaded to false', () => {
      const action = ResourceRatesActions.loadResourceRate({
        resourceRateId: mockResourceRate.id,
      });
      const expectedState = {
        ...initialResourceRatesState,
        loaded: false,
        error: null,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceRateSuccess should set loaded to true', () => {
      const action = ResourceRatesActions.loadResourceRateSuccess({
        resourceRate: mockResourceRate,
      });
      const expectedState = {
        ...initialResourceRatesState,
        loaded: true,
        entities: {
          0: mockResourceRate,
        },
        ids: [mockResourceRate.id],
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceRateFailure should set error to error', () => {
      const error = new Error();
      const action = ResourceRatesActions.loadResourceRateFailure({ error });
      const expectedState = {
        ...initialResourceRatesState,
        error,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateResourceRateSuccess should modify resourceRate', () => {
      const prepAction = ResourceRatesActions.loadResourceRateSuccess({
        resourceRate: { ...mockEmptyResourceRate, id: mockResourceRate.id },
      });
      const prepState: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        prepAction
      );

      const expectedState = {
        ...initialResourceRatesState,
        loaded: true,
        entities: {
          0: mockResourceRate,
        },
        ids: [mockResourceRate.id],
      };

      const action = ResourceRatesActions.updateResourceRateSuccess({
        resourceRate: mockResourceRate,
      });
      const result: ResourceRatesState = resourceRatesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateResourceRateFailure should set error to error', () => {
      const error = new Error();
      const action = ResourceRatesActions.updateResourceRateFailure({ error });
      const expectedState = {
        ...initialResourceRatesState,
        error,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createResourceRateSuccess should add resourceRate', () => {
      const action = ResourceRatesActions.createResourceRateSuccess({
        resourceRate: mockResourceRate,
      });
      const expectedState = {
        ...initialResourceRatesState,
        loaded: false,
        entities: {
          0: mockResourceRate,
        },
        ids: [mockResourceRate.id],
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createResourceRateFailure should set error to error', () => {
      const error = new Error();
      const action = ResourceRatesActions.createResourceRateFailure({ error });
      const expectedState = {
        ...initialResourceRatesState,
        error,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteResourceRateSuccess should add resourceRate', () => {
      const prepAction = ResourceRatesActions.loadResourceRateSuccess({
        resourceRate: mockResourceRate,
      });
      const prepState: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        prepAction
      );

      const expectedState = {
        ...initialResourceRatesState,
        loaded: true,
      };

      const action = ResourceRatesActions.deleteResourceRateSuccess({
        resourceRate: mockResourceRate,
      });
      const result: ResourceRatesState = resourceRatesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteResourceRateFailure should set error to error', () => {
      const error = new Error();
      const action = ResourceRatesActions.deleteResourceRateFailure({ error });
      const expectedState = {
        ...initialResourceRatesState,
        error,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectResourceRate should set selectedId', () => {
      const action = ResourceRatesActions.selectResourceRate({
        selectedId: mockResourceRate.id,
      });
      const expectedState = {
        ...initialResourceRatesState,
        selectedId: mockResourceRate.id,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedResourceRate should reset selectedId', () => {
      const prepAction = ResourceRatesActions.selectResourceRate({
        selectedId: mockResourceRate.id,
      });
      const prepState = resourceRatesReducer(
        initialResourceRatesState,
        prepAction
      );

      const action = ResourceRatesActions.resetSelectedResourceRate();
      const expectedState = {
        ...initialResourceRatesState,
        selectedId: null,
      };

      const result: ResourceRatesState = resourceRatesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetResourceRates should reset resourceRates', () => {
      const prepAction = ResourceRatesActions.loadResourceRatesSuccess({
        resourceRates,
      });
      const prepState: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        prepAction
      );

      const expectedState = {
        ...initialResourceRatesState,
        loaded: true,
      };

      const action = ResourceRatesActions.resetResourceRates();
      const result: ResourceRatesState = resourceRatesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: ResourceRatesState = resourceRatesReducer(
        initialResourceRatesState,
        action
      );

      expect(result).toBe(initialResourceRatesState);
    });
  });
});
