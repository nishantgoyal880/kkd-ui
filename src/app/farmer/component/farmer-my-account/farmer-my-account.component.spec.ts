import { FarmerDetailsService } from '../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

import { IdRoleService } from '../../../services/id-role/id-role.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerMyAccountComponent } from './farmer-my-account.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

describe('FarmerMyAccountComponent', () => {
  let component: FarmerMyAccountComponent;
  let fixture: ComponentFixture<FarmerMyAccountComponent>;
  let el=HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerMyAccountComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
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
      providers:[IdRoleService, FarmerDetailsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the searchFarmer method', async(() => {
    fixture.detectChanges();
    spyOn(component,'searchFarmer');
    expect(component.searchFarmer).toHaveBeenCalledTimes(0);
  }));

});
