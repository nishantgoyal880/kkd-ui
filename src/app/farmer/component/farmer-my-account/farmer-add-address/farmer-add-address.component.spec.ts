import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FarmerAddAddressComponent } from './farmer-add-address.component';

describe('FarmerAddAddressComponent', () => {
  let component: FarmerAddAddressComponent;
  let fixture: ComponentFixture<FarmerAddAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAddAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
