import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@bba/material';
import { PtoRequest } from '@bba/api-interfaces';

import { PtoRequestDetailsComponent } from './pto-request-details.component';

import { mockPtoRequest } from '@bba/testing';

describe('PtoRequestDetailsComponent', () => {
  let component: PtoRequestDetailsComponent;
  let fixture: ComponentFixture<PtoRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PtoRequestDetailsComponent],
      imports: [FormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtoRequestDetailsComponent);
    component = fixture.componentInstance;
    component.ptoRequest = mockPtoRequest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
