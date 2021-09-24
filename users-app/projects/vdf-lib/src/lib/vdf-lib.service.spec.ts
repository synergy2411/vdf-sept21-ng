import { TestBed } from '@angular/core/testing';

import { VdfLibService } from './vdf-lib.service';

describe('VdfLibService', () => {
  let service: VdfLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VdfLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
