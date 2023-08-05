import { TestBed } from '@angular/core/testing';

import { CalendrierGuard } from './calendrier.guard';

describe('CalendrierGuard', () => {
  let guard: CalendrierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CalendrierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
