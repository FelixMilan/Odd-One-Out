import { TestBed } from '@angular/core/testing';

import { RandomisorService } from './randomisor.service';

describe('RandomisorService', () => {
  let service: RandomisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
