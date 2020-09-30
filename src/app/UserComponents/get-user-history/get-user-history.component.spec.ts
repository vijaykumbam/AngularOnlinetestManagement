import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserHistoryComponent } from './get-user-history.component';

describe('GetUserHistoryComponent', () => {
  let component: GetUserHistoryComponent;
  let fixture: ComponentFixture<GetUserHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
