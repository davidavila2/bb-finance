import * as ProjectsActions from './projects.actions';
import {
  ProjectsState,
  initialProjectsState,
  projectsReducer,
} from './projects.reducer';
import { mockProject, mockEmptyProject } from '@bba/testing';

describe('Projects Reducer', () => {
  let projects;

  beforeEach(() => {
    projects = [
      { ...mockProject, id: '0' },
      { ...mockProject, id: '1' },
      { ...mockProject, id: '2' },
    ];
  });

  describe('valid Projects actions', () => {
    it('loadProjects should set loaded to false', () => {
      const action = ProjectsActions.loadProjects();
      const expectedState = {
        ...initialProjectsState,
        error: null,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectsSuccess should set the list of known Projects', () => {
      const action = ProjectsActions.loadProjectsSuccess({ projects });
      const expectedState = {
        ...initialProjectsState,
        loaded: true,
        entities: {
          0: projects[0],
          1: projects[1],
          2: projects[2],
        },
        ids: projects.map((project) => project.id),
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectsFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectsActions.loadProjectsFailure({ error });
      const expectedState = {
        ...initialProjectsState,
        error,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProject should set loaded to false', () => {
      const action = ProjectsActions.loadProject({ projectId: mockProject.id });
      const expectedState = {
        ...initialProjectsState,
        loaded: false,
        error: null,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectSuccess should set loaded to true', () => {
      const action = ProjectsActions.loadProjectSuccess({
        project: mockProject,
      });
      const expectedState = {
        ...initialProjectsState,
        loaded: true,
        entities: {
          0: mockProject,
        },
        ids: [mockProject.id],
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('loadProjectFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectsActions.loadProjectFailure({ error });
      const expectedState = {
        ...initialProjectsState,
        error,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('updateProjectSuccess should modify project', () => {
      const prepAction = ProjectsActions.loadProjectSuccess({
        project: { ...mockEmptyProject, id: mockProject.id },
      });
      const prepState: ProjectsState = projectsReducer(
        initialProjectsState,
        prepAction
      );

      const expectedState = {
        ...initialProjectsState,
        loaded: true,
        entities: {
          0: mockProject,
        },
        ids: [mockProject.id],
      };

      const action = ProjectsActions.updateProjectSuccess({
        project: mockProject,
      });
      const result: ProjectsState = projectsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('updateProjectFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectsActions.updateProjectFailure({ error });
      const expectedState = {
        ...initialProjectsState,
        error,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createProjectSuccess should add project', () => {
      const action = ProjectsActions.createProjectSuccess({
        project: mockProject,
      });
      const expectedState = {
        ...initialProjectsState,
        loaded: false,
        entities: {
          0: mockProject,
        },
        ids: [mockProject.id],
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('createProjectFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectsActions.createProjectFailure({ error });
      const expectedState = {
        ...initialProjectsState,
        error,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteProjectSuccess should add project', () => {
      const prepAction = ProjectsActions.loadProjectSuccess({
        project: mockProject,
      });
      const prepState: ProjectsState = projectsReducer(
        initialProjectsState,
        prepAction
      );

      const expectedState = {
        ...initialProjectsState,
        loaded: true,
      };

      const action = ProjectsActions.deleteProjectSuccess({
        project: mockProject,
      });
      const result: ProjectsState = projectsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('deleteProjectFailure should set error to error', () => {
      const error = new Error();
      const action = ProjectsActions.deleteProjectFailure({ error });
      const expectedState = {
        ...initialProjectsState,
        error,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('selectProject should set selectedId', () => {
      const action = ProjectsActions.selectProject({
        selectedId: mockProject.id,
      });
      const expectedState = {
        ...initialProjectsState,
        selectedId: mockProject.id,
      };

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toStrictEqual(expectedState);
    });

    it('resetSelectedProject should reset selectedId', () => {
      const prepAction = ProjectsActions.selectProject({
        selectedId: mockProject.id,
      });
      const prepState = projectsReducer(initialProjectsState, prepAction);

      const action = ProjectsActions.resetSelectedProject();
      const expectedState = {
        ...initialProjectsState,
        selectedId: null,
      };

      const result: ProjectsState = projectsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });

    it('resetProjects should reset projects', () => {
      const prepAction = ProjectsActions.loadProjectsSuccess({ projects });
      const prepState: ProjectsState = projectsReducer(
        initialProjectsState,
        prepAction
      );

      const expectedState = {
        ...initialProjectsState,
        loaded: true,
      };

      const action = ProjectsActions.resetProjects();
      const result: ProjectsState = projectsReducer(prepState, action);

      expect(result).toStrictEqual(expectedState);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result: ProjectsState = projectsReducer(
        initialProjectsState,
        action
      );

      expect(result).toBe(initialProjectsState);
    });
  });
});
