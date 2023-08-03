import { TestBed } from '@angular/core/testing';

import { RDVService } from './rdv.service';

describe('RDVService', () => {
  let service: RDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
