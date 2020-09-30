import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExamComponent } from './search-exam.component';

describe('SearchExamComponent', () => {
  let component: SearchExamComponent;
  let fixture: ComponentFixture<SearchExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
