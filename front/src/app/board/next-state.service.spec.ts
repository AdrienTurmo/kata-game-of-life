import { TestBed } from '@angular/core/testing';

import { NextStateService } from './next-state.service';

describe('NextStateService', () => {
  let service: NextStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
