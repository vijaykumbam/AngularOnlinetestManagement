import { TestBed } from '@angular/core/testing';

import { OnlineTestServiceService } from './online-test-service.service';

describe('OnlineTestServiceService', () => {
  let service: OnlineTestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineTestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
