import { TestBed } from '@angular/core/testing';

import { AdminonlyGuard } from './adminonly.guard';

describe('AdminonlyGuard', () => {
  let guard: AdminonlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminonlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
