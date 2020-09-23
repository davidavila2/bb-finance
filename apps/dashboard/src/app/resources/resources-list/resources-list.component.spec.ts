import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { ResourcesListComponent } from './resources-list.component';

describe('ResourcesListComponent', () => {
  let component: ResourcesListComponent;
  let fixture: ComponentFixture<ResourcesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResourcesListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
