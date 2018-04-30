import { TestBed, inject } from '@angular/core/testing';

import { FarmerAddProductService } from './farmer-add-product.service';

describe('FarmerAddProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerAddProductService]
    });
  });

  it('should be created', inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    expect(service).toBeTruthy();
  }));
});
