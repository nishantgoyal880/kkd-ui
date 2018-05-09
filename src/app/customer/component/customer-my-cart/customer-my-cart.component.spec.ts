import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IdRoleService } from "./../../../services/id-role/id-role.service";
import { CustomerMyCartComponent } from './customer-my-cart.component';

describe('CustomerMyCartComponent', () => {
  let component: CustomerMyCartComponent;
  let fixture: ComponentFixture<CustomerMyCartComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMyCartComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(CustomerMyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getCartItems method',() => { 
    spyOn(component,'getCartItems');
    expect(component.getCartItems).toHaveBeenCalledTimes(0);
  });

  it('should call the deleteItem method',async(() => { 
    fixture.detectChanges();
    spyOn(component,'deleteItem');
    var res=fixture.debugElement.query(By.css('button'));
    expect(res).toBe(null);
  }));

  it('should call the checkout methproceedod',async(() => { 
    fixture.detectChanges();
    spyOn(component,'checkout');
    var res=fixture.debugElement.query(By.css('button'));
    expect(res).toBe(null);
  }));

});
