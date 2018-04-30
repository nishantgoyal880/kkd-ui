import { TestBed, inject } from '@angular/core/testing';

import { FarmerDetailsService } from './farmer-details.service';

describe('FarmerDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerDetailsService]
    });
  });

  it('should be created', inject([FarmerDetailsService], (service: FarmerDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
