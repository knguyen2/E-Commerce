import { TestBed, inject } from '@angular/core/testing';

import { PantsService } from './pants.service';

describe('PantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PantsService]
    });
  });

  it('should be created', inject([PantsService], (service: PantsService) => {
    expect(service).toBeTruthy();
  }));
});
