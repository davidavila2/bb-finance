import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProjectResourcesFacade } from './project-resources.facade';
import * as ProjectResourcesActions from './project-resources.actions';
import { initialProjectResourcesState } from './project-resources.reducer';

import { mockProjectResource } from '@bba/testing';

describe('ProjectResourcesFacade', () => {
  let facade: ProjectResourcesFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectResourcesFacade,
        provideMockStore({ initialState: initialProjectResourcesState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(ProjectResourcesFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = ProjectResourcesActions.createProjectResource({
      projectResource: mockProjectResource,
    });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(projectResource.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectProjectResource(mockProjectResource.id);

      const action = ProjectResourcesActions.selectProjectResource({
        selectedId: mockProjectResource.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadProjectResources on loadProjectResources()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadProjectResources();

      const action = ProjectResourcesActions.loadProjectResources();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadProjectResource on loadProjectResource(projectResource.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadProjectResource(mockProjectResource.id);

      const action = ProjectResourcesActions.loadProjectResource({
        projectResourceId: mockProjectResource.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createProjectResource on createProjectResource(projectResource)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createProjectResource(mockProjectResource);

      const action = ProjectResourcesActions.createProjectResource({
        projectResource: mockProjectResource,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateProjectResource on updateProjectResource(projectResource)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateProjectResource(mockProjectResource);

      const action = ProjectResourcesActions.updateProjectResource({
        projectResource: mockProjectResource,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteProjectResource(mockProjectResource);

      const action = ProjectResourcesActions.deleteProjectResource({
        projectResource: mockProjectResource,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
