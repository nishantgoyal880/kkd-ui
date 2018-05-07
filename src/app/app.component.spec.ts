import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VerifytokenService } from './services/verify-token/verifytoken.service';
import { IdRoleService } from './services/id-role/id-role.service'

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent],
      providers: [ VerifytokenService, IdRoleService ],
      imports: [ RouterTestingModule,
        HttpModule,
        HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
