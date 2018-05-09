import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerLoginComponent } from './farmer-login.component';
import { IdRoleService } from '../../../services/id-role/id-role.service'

fdescribe('FarmerLoginComponent', () => {
  let component: FarmerLoginComponent;
  let fixture: ComponentFixture<FarmerLoginComponent>;
  let debug: DebugElement;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerLoginComponent ],
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
      providers:[ IdRoleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerLoginComponent);
    component = fixture.componentInstance;
    debug=fixture.debugElement.query(By.css('form'));
    el=debug.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the login farmer method', async(() => {
    fixture.detectChanges();
    spyOn(component,'loginFarmer');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.loginFarmer).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.rForm.controls['mobileNo'].setValue('');
    component.rForm.controls['password'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.rForm.controls['mobileNo'].setValue('9468075105');
    component.rForm.controls['password'].setValue('qwerty');
    expect(component.rForm.valid).toBeTruthy();
  }));
});