import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, PtoRequestsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { PtoRequest } from '@bba/api-interfaces';

import { PtoRequestDetailsComponent } from './pto-request-details/pto-request-details.component';
import { PtoRequestsListComponent } from './pto-requests-list/pto-requests-list.component';
import { PtoRequestsComponent } from './pto-requests.component';

import { mockPtoRequest, mockEmptyPtoRequest } from '@bba/testing';

describe('PtoRequestsComponent', () => {
  let component: PtoRequestsComponent;
  let fixture: ComponentFixture<PtoRequestsComponent>;
  let de: DebugElement;
  let ptoRequestsFacade: PtoRequestsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PtoRequestsComponent,
        PtoRequestDetailsComponent,
        PtoRequestsListComponent,
      ],
      imports: [
        CoreDataModule,
        CoreStateModule,
        FormsModule,
        MaterialModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoRequestsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    ptoRequestsFacade = TestBed.inject(PtoRequestsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call ptoRequestsFacade selectPtoRequest', () => {
    const spy = jest.spyOn(ptoRequestsFacade, 'selectPtoRequest');

    component.selectPtoRequest(mockPtoRequest);

    expect(spy).toHaveBeenCalledWith(mockPtoRequest.id);
  });

  describe('should on save call ptoRequestsFacade', () => {
    it('updatePtoRequest', () => {
      const spy = jest.spyOn(ptoRequestsFacade, 'updatePtoRequest');

      component.savePtoRequest(mockPtoRequest);

      expect(spy).toHaveBeenCalledWith(mockPtoRequest);
    });

    it('createPtoRequest', () => {
      const spy = jest.spyOn(ptoRequestsFacade, 'createPtoRequest');

      component.savePtoRequest(mockEmptyPtoRequest);

      expect(spy).toHaveBeenCalledWith(mockEmptyPtoRequest);
    });
  });

  it('should on delete call ptoRequestsFacade deletePtoRequest', () => {
    const spy = jest.spyOn(ptoRequestsFacade, 'deletePtoRequest');

    component.deletePtoRequest(mockPtoRequest);

    expect(spy).toHaveBeenCalledWith(mockPtoRequest);
  });
});
