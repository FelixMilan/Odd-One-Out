import { TestBed } from '@angular/core/testing';

import { IOService } from './IO.service';

describe('InputService', () => {
  let service: IOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
