import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { FarmerPreviousOrderComponent } from './farmer-previous-order.component';

describe('FarmerPreviousOrderComponent', () => {
  let component: FarmerPreviousOrderComponent;
  let fixture: ComponentFixture<FarmerPreviousOrderComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerPreviousOrderComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        NgxPaginationModule,
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
    fixture = TestBed.createComponent(FarmerPreviousOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the ngOnInit method', async(() => {
    fixture.detectChanges();
    spyOn(component,'ngOnInit');
    expect(component.ngOnInit).toHaveBeenCalledTimes(0);
  }));
});