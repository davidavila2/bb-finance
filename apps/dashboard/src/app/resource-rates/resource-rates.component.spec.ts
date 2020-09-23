import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

import { CoreDataModule } from '@bba/core-data';
import { CoreStateModule, ResourceRatesFacade } from '@bba/core-state';
import { MaterialModule } from '@bba/material';
import { ResourceRate } from '@bba/api-interfaces';

import { ResourceRateDetailsComponent } from './resource-rate-details/resource-rate-details.component';
import { ResourceRatesListComponent } from './resource-rates-list/resource-rates-list.component';
import { ResourceRatesComponent } from './resource-rates.component';

import { mockResourceRate, mockEmptyResourceRate } from '@bba/testing';

describe('ResourceRatesComponent', () => {
  let component: ResourceRatesComponent;
  let fixture: ComponentFixture<ResourceRatesComponent>;
  let de: DebugElement;
  let resourceRatesFacade: ResourceRatesFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResourceRatesComponent,
        ResourceRateDetailsComponent,
        ResourceRatesListComponent,
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
    fixture = TestBed.createComponent(ResourceRatesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    resourceRatesFacade = TestBed.inject(ResourceRatesFacade);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should on select call resourceRatesFacade selectResourceRate', () => {
    const spy = jest.spyOn(resourceRatesFacade, 'selectResourceRate');

    component.selectResourceRate(mockResourceRate);

    expect(spy).toHaveBeenCalledWith(mockResourceRate.id);
  });

  describe('should on save call resourceRatesFacade', () => {
    it('updateResourceRate', () => {
      const spy = jest.spyOn(resourceRatesFacade, 'updateResourceRate');

      component.saveResourceRate(mockResourceRate);

      expect(spy).toHaveBeenCalledWith(mockResourceRate);
    });

    it('createResourceRate', () => {
      const spy = jest.spyOn(resourceRatesFacade, 'createResourceRate');

      component.saveResourceRate(mockEmptyResourceRate);

      expect(spy).toHaveBeenCalledWith(mockEmptyResourceRate);
    });
  });

  it('should on delete call resourceRatesFacade deleteResourceRate', () => {
    const spy = jest.spyOn(resourceRatesFacade, 'deleteResourceRate');

    component.deleteResourceRate(mockResourceRate);

    expect(spy).toHaveBeenCalledWith(mockResourceRate);
  });
});
