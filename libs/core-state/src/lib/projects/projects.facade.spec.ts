import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProjectsFacade } from './projects.facade';
import * as ProjectsActions from './projects.actions';
import { initialProjectsState } from './projects.reducer';

import { mockProject } from '@bba/testing';

describe('ProjectsFacade', () => {
  let facade: ProjectsFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsFacade,
        provideMockStore({ initialState: initialProjectsState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(ProjectsFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = ProjectsActions.createProject({ project: mockProject });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(project.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectProject(mockProject.id);

      const action = ProjectsActions.selectProject({
        selectedId: mockProject.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadProjects on loadProjects()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadProjects();

      const action = ProjectsActions.loadProjects();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadProject on loadProject(project.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadProject(mockProject.id);

      const action = ProjectsActions.loadProject({ projectId: mockProject.id });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createProject on createProject(project)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createProject(mockProject);

      const action = ProjectsActions.createProject({ project: mockProject });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateProject on updateProject(project)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateProject(mockProject);

      const action = ProjectsActions.updateProject({ project: mockProject });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteProject(mockProject);

      const action = ProjectsActions.deleteProject({ project: mockProject });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
