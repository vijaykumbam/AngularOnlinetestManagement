import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedExamByAssignIdComponent } from './view-assigned-exam-by-assign-id.component';

describe('ViewAssignedExamByAssignIdComponent', () => {
  let component: ViewAssignedExamByAssignIdComponent;
  let fixture: ComponentFixture<ViewAssignedExamByAssignIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignedExamByAssignIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignedExamByAssignIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
