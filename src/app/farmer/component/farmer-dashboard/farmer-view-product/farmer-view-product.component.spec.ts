import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerViewProductComponent } from './farmer-view-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import { FarmerViewProductService } from '../../../services/farmer-view-product/farmer-view-product.service'

describe('FarmerViewProductComponent', () => {
  let component: FarmerViewProductComponent;
  let fixture: ComponentFixture<FarmerViewProductComponent>;
  let debug: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerViewProductComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, 'public/assets/i18n', '.json'),
          deps: [Http]
        })
      ],
      providers: [IdRoleService, FarmerViewProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerViewProductComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement.query(By.css('form'));
    el = debug.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test-case for ngOnInit method
  it('should call the ngOnInit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'ngOnInit');
    expect(component.ngOnInit).toHaveBeenCalledTimes(0);
  }));

  //test-case for getProducts method
  it('should call the getProducts method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'getProducts');
    expect(component.getProducts).toHaveBeenCalledTimes(0);
  }));

  //test-case for saveId method
  it('should call the saveId method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'saveId');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.saveId).toHaveBeenCalledTimes(0);
  }));

  //test-case for deleteProduct method
  it('should call the deleteProduct method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'deleteProduct');
    expect(component.deleteProduct).toHaveBeenCalledTimes(0);
  }));

  //test-case for updateProduct method
  it('should call the updateProduct method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'updateProduct');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.updateProduct).toHaveBeenCalledTimes(0);
  }));

  //test-case for updateData method
  it('should call the updateData method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'updateData');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.updateData).toHaveBeenCalledTimes(0);
  }));

});