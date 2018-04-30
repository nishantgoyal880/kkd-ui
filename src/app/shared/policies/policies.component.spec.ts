import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PoliciesComponent } from './policies.component';

fdescribe('PoliciesComponent', () => {
  let component: PoliciesComponent;
  let fixture: ComponentFixture<PoliciesComponent>;
  let debug: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h1');
    expect(e1.innerText).toEqual('Policies');
  }));

  it('should render policy in a p tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('p');
    expect(e1.innerText).toEqual('Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the policy on the product page shall prevail over the general returns policy. Do refer the respective item\'s applicable return policy on the product page for any exceptions to the table below. The return policy is divided into three parts; Do read all sections carefully to understand the conditions and cases under which returns will be accepted. A privacy policy is a legal document that details how a website gathers, stores, shares, and sells data about its visitors. This data typically includes items such as a user’s name, address, birthday, marital status, medical history, and consumer behavior. The specific contents of this document depend upon the laws in the legal jurisdiction in which your business operates. Most countries have their own set of guidelines regarding what information is eligible for collection, and how that information may be used. When it comes to legal documents, it is best not to take chances. Fortunately, it’s easy to get a free website privacy policy in just a few minutes. All you have to do is fill up the blank spaces below and we will send you an email with your own personalized privacy policy for your business.');
  }));   
});