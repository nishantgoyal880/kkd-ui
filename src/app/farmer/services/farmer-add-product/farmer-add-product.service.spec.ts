import { TestBed, inject } from '@angular/core/testing';
import { FarmerAddProductService } from './farmer-add-product.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('FarmerAddProductService', () => {
  let service: FarmerAddProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerAddProductService],
      imports: [ 
        HttpClientTestingModule,
      HttpClientModule,
    HttpModule]
    });
    service = TestBed.get(FarmerAddProductService);
  });

  it('should be created', inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should have update function',
  inject([FarmerAddProductService], (service: FarmerAddProductService)=>{
    expect(service.update).toBeTruthy();
  }));
});
