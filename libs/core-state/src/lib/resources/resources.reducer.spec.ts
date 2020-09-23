import * as ResourcesActions from './resources.actions';
import {
  ResourcesState,
  initialResourcesState,
  resourcesReducer,
} from './resources.reducer';
import { mockResource, mockEmptyResource } from '@bba/testing';

describe('Resources Reducer', () => {
  let resources;

  beforeEach(() => {
    resources = [
      { ...mockResource, id: '0' },
      { ...mockResource, id: '1' },
      { ...mockResource, id: '2' },
    ];
  });

  describe('valid Resources actions', () => {
    it('loadResources should set loaded to false', () => {
      const action = ResourcesActions.loadResources();
      const expectedState = {
        ...initialResourcesState,
        error: null,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourcesSuccess should set the list of known Resources', () => {
      const action = ResourcesActions.loadResourcesSuccess({ resources });
      const expectedState = {
        ...initialResourcesState,
        loaded: true,
        entities: {
          0: resources[0],
          1: resources[1],
          2: resources[2],
        },
        ids: resources.map((resource) => resource.id),
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourcesFailure should set error to error', () => {
      const error = new Error();
      const action = ResourcesActions.loadResourcesFailure({ error });
      const expectedState = {
        ...initialResourcesState,
        error,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResource should set loaded to false', () => {
      const action = ResourcesActions.loadResource({
        resourceId: mockResource.id,
      });
      const expectedState = {
        ...initialResourcesState,
        loaded: false,
        error: null,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceSuccess should set loaded to true', () => {
      const action = ResourcesActions.loadResourceSuccess({
        resource: mockResource,
      });
      const expectedState = {
        ...initialResourcesState,
        loaded: true,
        entities: {
          0: mockResource,
        },
        ids: [mockResource.id],
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ResourcesActions.loadResourceFailure({ error });
      const expectedState = {
        ...initialResourcesState,
        error,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateResourceSuccess should modify resource', () => {
      const prepAction = ResourcesActions.loadResourceSuccess({
        resource: { ...mockEmptyResource, id: mockResource.id },
      });
      const prepState: ResourcesState = resourcesReducer(
        initialResourcesState,
        prepAction
      );

      const expectedState = {
        ...initialResourcesState,
        loaded: true,
        entities: {
          0: mockResource,
        },
        ids: [mockResource.id],
      };

      const action = ResourcesActions.updateResourceSuccess({
        resource: mockResource,
      });
      const result: ResourcesState = resourcesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ResourcesActions.updateResourceFailure({ error });
      const expectedState = {
        ...initialResourcesState,
        error,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createResourceSuccess should add resource', () => {
      const action = ResourcesActions.createResourceSuccess({
        resource: mockResource,
      });
      const expectedState = {
        ...initialResourcesState,
        loaded: false,
        entities: {
          0: mockResource,
        },
        ids: [mockResource.id],
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ResourcesActions.createResourceFailure({ error });
      const expectedState = {
        ...initialResourcesState,
        error,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteResourceSuccess should add resource', () => {
      const prepAction = ResourcesActions.loadResourceSuccess({
        resource: mockResource,
      });
      const prepState: ResourcesState = resourcesReducer(
        initialResourcesState,
        prepAction
      );

      const expectedState = {
        ...initialResourcesState,
        loaded: true,
      };

      const action = ResourcesActions.deleteResourceSuccess({
        resource: mockResource,
      });
      const result: ResourcesState = resourcesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ResourcesActions.deleteResourceFailure({ error });
      const expectedState = {
        ...initialResourcesState,
        error,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectResource should set selectedId', () => {
      const action = ResourcesActions.selectResource({
        selectedId: mockResource.id,
      });
      const expectedState = {
        ...initialResourcesState,
        selectedId: mockResource.id,
      };

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedResource should reset selectedId', () => {
      const prepAction = ResourcesActions.selectResource({
        selectedId: mockResource.id,
      });
      const prepState = resourcesReducer(initialResourcesState, prepAction);

      const action = ResourcesActions.resetSelectedResource();
      const expectedState = {
        ...initialResourcesState,
        selectedId: null,
      };

      const result: ResourcesState = resourcesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetResources should reset resources', () => {
      const prepAction = ResourcesActions.loadResourcesSuccess({ resources });
      const prepState: ResourcesState = resourcesReducer(
        initialResourcesState,
        prepAction
      );

      const expectedState = {
        ...initialResourcesState,
        loaded: true,
      };

      const action = ResourcesActions.resetResources();
      const result: ResourcesState = resourcesReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: ResourcesState = resourcesReducer(
        initialResourcesState,
        action
      );

      expect(result).toBe(initialResourcesState);
    });
  });
});
