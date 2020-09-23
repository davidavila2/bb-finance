import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { ProjectResource } from '@bba/api-interfaces';

import { ProjectResourceDetailsComponent } from './project-resource-details.component';

import { mockProjectResource } from '@bba/testing';

describe('ProjectResourceDetailsComponent', () => {
  let component: ProjectResourceDetailsComponent;
  let fixture: ComponentFixture<ProjectResourceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectResourceDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectResourceDetailsComponent);
    component = fixture.componentInstance;
    component.projectResource = mockProjectResource;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
