import { TestBed } from '@angular/core/testing';
import { ActionsSubject } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ResourcesFacade } from './resources.facade';
import * as ResourcesActions from './resources.actions';
import { initialResourcesState } from './resources.reducer';

import { mockResource } from '@bba/testing';

describe('ResourcesFacade', () => {
  let facade: ResourcesFacade;
  let actionSubject;
  const mockActionsSubject = new ActionsSubject();
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ResourcesFacade,
        provideMockStore({ initialState: initialResourcesState }),
        { provide: ActionsSubject, useValue: mockActionsSubject },
      ],
    });

    facade = TestBed.inject(ResourcesFacade);
    actionSubject = TestBed.inject(ActionsSubject);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should have mutations', (done) => {
    const action = ResourcesActions.createResource({ resource: mockResource });
    actionSubject.next(action);

    facade.mutations$.subscribe((result) => {
      expect(result).toBe(action);
      done();
    });
  });

  describe('should dispatch', () => {
    it('select on select(resource.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.selectResource(mockResource.id);

      const action = ResourcesActions.selectResource({
        selectedId: mockResource.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadResources on loadResources()', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadResources();

      const action = ResourcesActions.loadResources();

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('loadResource on loadResource(resource.id)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.loadResource(mockResource.id);

      const action = ResourcesActions.loadResource({
        resourceId: mockResource.id,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('createResource on createResource(resource)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.createResource(mockResource);

      const action = ResourcesActions.createResource({
        resource: mockResource,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('updateResource on updateResource(resource)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.updateResource(mockResource);

      const action = ResourcesActions.updateResource({
        resource: mockResource,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('delete on delete(model)', () => {
      const spy = jest.spyOn(store, 'dispatch');

      facade.deleteResource(mockResource);

      const action = ResourcesActions.deleteResource({
        resource: mockResource,
      });

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
