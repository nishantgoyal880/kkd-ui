import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {IdRoleService} from '../../../../services/id-role/id-role.service'
import { CustomerPreviousOrderComponent } from './customer-previous-order.component';

fdescribe('CustomerPreviousOrderComponent', () => {
  let component: CustomerPreviousOrderComponent;
  let fixture: ComponentFixture<CustomerPreviousOrderComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPreviousOrderComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
      ],
      providers:[IdRoleService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPreviousOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h1');
    console.log(e1.innerText);
    expect(e1.innerText).toEqual('Previous Orders');
  }));

  it('should call the getdata method', async(() => {
    fixture.detectChanges();
    spyOn(component,'getdata');
    expect(component.getdata).toHaveBeenCalledTimes(0);
  }));
});
