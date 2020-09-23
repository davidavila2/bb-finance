import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { Resource } from '@bba/api-interfaces';

import { ResourceDetailsComponent } from './resource-details.component';

import { mockResource } from '@bba/testing';

describe('ResourceDetailsComponent', () => {
  let component: ResourceDetailsComponent;
  let fixture: ComponentFixture<ResourceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDetailsComponent);
    component = fixture.componentInstance;
    component.resource = mockResource;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
