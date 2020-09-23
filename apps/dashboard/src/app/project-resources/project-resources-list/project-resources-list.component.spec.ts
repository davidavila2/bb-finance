import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { ProjectResourcesListComponent } from './project-resources-list.component';

describe('ProjectResourcesListComponent', () => {
  let component: ProjectResourcesListComponent;
  let fixture: ComponentFixture<ProjectResourcesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectResourcesListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
