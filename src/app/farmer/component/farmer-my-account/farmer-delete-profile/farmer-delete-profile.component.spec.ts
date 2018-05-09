import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerDeleteProfileComponent } from './farmer-delete-profile.component';

describe('FarmerDeleteProfileComponent', () => {
  let component: FarmerDeleteProfileComponent;
  let fixture: ComponentFixture<FarmerDeleteProfileComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerDeleteProfileComponent ],
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDeleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the deleteFarmerProfile method', async(() => {
    fixture.detectChanges();
    spyOn(component,'deleteFarmerProfile');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.deleteFarmerProfile).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.rForm.controls['currentPassword'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.rForm.controls['currentPassword'].setValue('qwerty');
    expect(component.rForm.valid).toBeTruthy();
  }));
});