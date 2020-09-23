import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { ResourceRate } from '@bba/api-interfaces';

import { ResourceRateDetailsComponent } from './resource-rate-details.component';

import { mockResourceRate } from '@bba/testing';

describe('ResourceRateDetailsComponent', () => {
  let component: ResourceRateDetailsComponent;
  let fixture: ComponentFixture<ResourceRateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceRateDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceRateDetailsComponent);
    component = fixture.componentInstance;
    component.resourceRate = mockResourceRate;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
