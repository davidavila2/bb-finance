import * as ProjectResourcesActions from './project-resources.actions';
import {
  ProjectResourcesState,
  initialProjectResourcesState,
  projectResourcesReducer,
} from './project-resources.reducer';
import { mockProjectResource, mockEmptyProjectResource } from '@bba/testing';

describe('ProjectResources Reducer', () => {
  let projectResources;

  beforeEach(() => {
    projectResources = [
      { ...mockProjectResource, id: '0' },
      { ...mockProjectResource, id: '1' },
      { ...mockProjectResource, id: '2' },
    ];
  });

  describe('valid ProjectResources actions', () => {
    it('loadProjectResources should set loaded to false', () => {
      const action = ProjectResourcesActions.loadProjectResources();
      const expectedState = {
        ...initialProjectResourcesState,
        error: null,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectResourcesSuccess should set the list of known ProjectResources', () => {
      const action = ProjectResourcesActions.loadProjectResourcesSuccess({
        projectResources,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        loaded: true,
        entities: {
          0: projectResources[0],
          1: projectResources[1],
          2: projectResources[2],
        },
        ids: projectResources.map((projectResource) => projectResource.id),
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectResourcesFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectResourcesActions.loadProjectResourcesFailure({
        error,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        error,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectResource should set loaded to false', () => {
      const action = ProjectResourcesActions.loadProjectResource({
        projectResourceId: mockProjectResource.id,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        loaded: false,
        error: null,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectResourceSuccess should set loaded to true', () => {
      const action = ProjectResourcesActions.loadProjectResourceSuccess({
        projectResource: mockProjectResource,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        loaded: true,
        entities: {
          0: mockProjectResource,
        },
        ids: [mockProjectResource.id],
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectResourcesActions.loadProjectResourceFailure({
        error,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        error,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateProjectResourceSuccess should modify projectResource', () => {
      const prepAction = ProjectResourcesActions.loadProjectResourceSuccess({
        projectResource: {
          ...mockEmptyProjectResource,
          id: mockProjectResource.id,
        },
      });
      const prepState: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        prepAction
      );

      const expectedState = {
        ...initialProjectResourcesState,
        loaded: true,
        entities: {
          0: mockProjectResource,
        },
        ids: [mockProjectResource.id],
      };

      const action = ProjectResourcesActions.updateProjectResourceSuccess({
        projectResource: mockProjectResource,
      });
      const result: ProjectResourcesState = projectResourcesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateProjectResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectResourcesActions.updateProjectResourceFailure({
        error,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        error,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createProjectResourceSuccess should add projectResource', () => {
      const action = ProjectResourcesActions.createProjectResourceSuccess({
        projectResource: mockProjectResource,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        loaded: false,
        entities: {
          0: mockProjectResource,
        },
        ids: [mockProjectResource.id],
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createProjectResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectResourcesActions.createProjectResourceFailure({
        error,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        error,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteProjectResourceSuccess should add projectResource', () => {
      const prepAction = ProjectResourcesActions.loadProjectResourceSuccess({
        projectResource: mockProjectResource,
      });
      const prepState: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        prepAction
      );

      const expectedState = {
        ...initialProjectResourcesState,
        loaded: true,
      };

      const action = ProjectResourcesActions.deleteProjectResourceSuccess({
        projectResource: mockProjectResource,
      });
      const result: ProjectResourcesState = projectResourcesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteProjectResourceFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectResourcesActions.deleteProjectResourceFailure({
        error,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        error,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectProjectResource should set selectedId', () => {
      const action = ProjectResourcesActions.selectProjectResource({
        selectedId: mockProjectResource.id,
      });
      const expectedState = {
        ...initialProjectResourcesState,
        selectedId: mockProjectResource.id,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedProjectResource should reset selectedId', () => {
      const prepAction = ProjectResourcesActions.selectProjectResource({
        selectedId: mockProjectResource.id,
      });
      const prepState = projectResourcesReducer(
        initialProjectResourcesState,
        prepAction
      );

      const action = ProjectResourcesActions.resetSelectedProjectResource();
      const expectedState = {
        ...initialProjectResourcesState,
        selectedId: null,
      };

      const result: ProjectResourcesState = projectResourcesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetProjectResources should reset projectResources', () => {
      const prepAction = ProjectResourcesActions.loadProjectResourcesSuccess({
        projectResources,
      });
      const prepState: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        prepAction
      );

      const expectedState = {
        ...initialProjectResourcesState,
        loaded: true,
      };

      const action = ProjectResourcesActions.resetProjectResources();
      const result: ProjectResourcesState = projectResourcesReducer(
        prepState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: ProjectResourcesState = projectResourcesReducer(
        initialProjectResourcesState,
        action
      );

      expect(result).toBe(initialProjectResourcesState);
    });
  });
});
