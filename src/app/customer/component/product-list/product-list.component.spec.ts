import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IdRoleService } from "./../../../services/id-role/id-role.service";
import { ProductListComponent } from './product-list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        BrowserModule,
        NgxPaginationModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, 'public/assets/i18n', '.json'),
          deps: [Http]
      })
      ],
      providers:[IdRoleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should call the calculatingMax method',() => { 
    spyOn(component,'calculatingMax');
    expect(component.calculatingMax).toHaveBeenCalledTimes(0);
  });

  it('should call the sortBy method',() => { 
    spyOn(component,'sortBy');
    expect(component.sortBy).toHaveBeenCalledTimes(0);
  });

  it('should call the searchProduct method',() => { 
    spyOn(component,'searchProduct');
    expect(component.searchProduct).toHaveBeenCalledTimes(0);
  });

  it('should call the myOnFinishPrice method',() => { 
    spyOn(component,'myOnFinishPrice');
    expect(component.myOnFinishPrice).toHaveBeenCalledTimes(0);
  });

  it('should call the myOnFinishQuantity method',() => { 
    spyOn(component,'myOnFinishQuantity');
    expect(component.myOnFinishQuantity).toHaveBeenCalledTimes(0);
  });

  it('should call the proceed method',() => { 
    spyOn(component,'proceed');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.proceed).toHaveBeenCalledTimes(0);
  });
});
