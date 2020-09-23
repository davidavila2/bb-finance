import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';

import { PtoRequestsListComponent } from './pto-requests-list.component';

describe('PtoRequestsListComponent', () => {
  let component: PtoRequestsListComponent;
  let fixture: ComponentFixture<PtoRequestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PtoRequestsListComponent],
      imports: [MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
