import { TestBed, inject } from '@angular/core/testing';

import { DressesService } from './dresses.service';

describe('DressesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DressesService]
    });
  });

  it('should be created', inject([DressesService], (service: DressesService) => {
    expect(service).toBeTruthy();
  }));
});
