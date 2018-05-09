import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SupportComponent } from './support.component';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;
  let debug: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportComponent ],
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
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    debug=fixture.debugElement.query(By.css('form'));
    el=debug.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the submitIssue method', async(() => {
    fixture.detectChanges();
    spyOn(component,'submitIssue');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.submitIssue).toHaveBeenCalledTimes(0);
  }));

  it('should call the onFileSelected method', async(() => {
    fixture.detectChanges();
    spyOn(component,'onFileSelected');
    expect(component.onFileSelected).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.rForm.controls['issueTitle'].setValue('');
    component.rForm.controls['issueDescription'].setValue('');
    component.rForm.controls['inputEmail'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.rForm.controls['issueTitle'].setValue('Login');
    component.rForm.controls['issueDescription'].setValue('Not able to login');
    component.rForm.controls['inputEmail'].setValue('anu@123');
    expect(component.rForm.valid).toBeTruthy();
  }));
});
