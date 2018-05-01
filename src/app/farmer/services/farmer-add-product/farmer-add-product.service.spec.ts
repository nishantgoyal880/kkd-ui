
import { FarmerAddProductService } from './farmer-add-product.service';
import {FarmerAddProductComponent } from '../../component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';


fdescribe('FarmerAddProductService', () => {
  let mockBackend: MockBackend;

  let service: FarmerAddProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmerAddProductService,
        MockBackend,BaseRequestOptions,
        {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
     }
      ],
      imports: [ 
        HttpClientTestingModule,
      HttpClientModule,
    HttpModule]
    });
    mockBackend = getTestBed().get(MockBackend);

    service = TestBed.get(FarmerAddProductService);
  });

  it('should be created', inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should have update function',
  inject([FarmerAddProductService], (service: FarmerAddProductService)=>{
    expect(service.update).toBeTruthy();
  }));

  /*it('should insert new blog entries', async(() => {
    let blogService: BlogService = getTestBed().get(BlogService);
    mockBackend.connections.subscribe((connection: MockConnection) => {
      // is it the correct REST type for an insert? (POST)
      expect(connection.request.method).toBe(RequestMethod.Post);
   
      connection.mockRespond(new Response(new ResponseOptions({status: 201})));
    });
   
    let data: BlogEntry = new BlogEntry('Blog Entry', 
                                        '<p><b>Hi</b></p>', '*Hi*', null);
    blogService.saveBlog(data).subscribe(
      (successResult) => {
        expect(successResult).toBeDefined();
        expect(successResult.status).toBe(201);
      });
  }));*/

  it('should insert new product', async(() => {
    let addProductService: FarmerAddProductService = getTestBed().get(FarmerAddProductService);
    mockBackend.connections.subscribe((connection: MockConnection) => {

      expect(connection.request.method).toBe(RequestMethod.Post);

      connection.mockRespond(new Response(new ResponseOptions({status: 201})));
    });
    //let data: FarmerAddProductComponent = new FarmerAddProductComponent(addProductService,null,null,null);
    
    var productSubmission = {

      kkdFarmId:"",
      description:"string",
      price:"price",
      bulkOrderPrice:"bulkOrderPrice",
      quantity:"quantity",
      productName:"potato",
      available:true,
      imageUrl:"imageurl",
      }

    addProductService.update("KKDFARM1001", productSubmission).subscribe(
      (successResult) => {
        expect(successResult).toBeDefined();
        expect(successResult.status).toBe(201);
      });

  }))

});
