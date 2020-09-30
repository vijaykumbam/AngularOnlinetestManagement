import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignExamtouserComponent } from './assign-examtouser.component';

describe('AssignExamtouserComponent', () => {
  let component: AssignExamtouserComponent;
  let fixture: ComponentFixture<AssignExamtouserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignExamtouserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignExamtouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
