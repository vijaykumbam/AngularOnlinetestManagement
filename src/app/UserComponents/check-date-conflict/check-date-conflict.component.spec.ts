import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDateConflictComponent } from './check-date-conflict.component';

describe('CheckDateConflictComponent', () => {
  let component: CheckDateConflictComponent;
  let fixture: ComponentFixture<CheckDateConflictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckDateConflictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDateConflictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
