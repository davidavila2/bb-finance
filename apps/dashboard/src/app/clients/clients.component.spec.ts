import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, ClientsFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { Client } from '@bba/api-interfaces';

import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsComponent } from './clients.component';

import { mockClient, mockEmptyClient } from '@bba/testing';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;
  let de: DebugElement;
  let clientsFacade: ClientsFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsComponent,
        ClientDetailsComponent,
        ClientsListComponent,
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
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    clientsFacade = TestBed.inject(ClientsFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call clientsFacade selectClient', () => {
    const spy = jest.spyOn(clientsFacade, 'selectClient');

    component.selectClient(mockClient);

    expect(spy).toHaveBeenCalledWith(mockClient.id);
  });

  describe('should on save call clientsFacade', () => {
    it('updateClient', () => {
      const spy = jest.spyOn(clientsFacade, 'updateClient');

      component.saveClient(mockClient);

      expect(spy).toHaveBeenCalledWith(mockClient);
    });

    it('createClient', () => {
      const spy = jest.spyOn(clientsFacade, 'createClient');

      component.saveClient(mockEmptyClient);

      expect(spy).toHaveBeenCalledWith(mockEmptyClient);
    });
  });

  it('should on delete call clientsFacade deleteClient', () => {
    const spy = jest.spyOn(clientsFacade, 'deleteClient');

    component.deleteClient(mockClient);

    expect(spy).toHaveBeenCalledWith(mockClient);
  });
});
