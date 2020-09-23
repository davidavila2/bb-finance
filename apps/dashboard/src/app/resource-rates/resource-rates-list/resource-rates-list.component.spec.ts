import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { ResourceRatesListComponent } from './resource-rates-list.component';

describe('ResourceRatesListComponent', () => {
  let component: ResourceRatesListComponent;
  let fixture: ComponentFixture<ResourceRatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceRatesListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceRatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
