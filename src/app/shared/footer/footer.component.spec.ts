import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from './footer.component';
import { IdRoleService } from '../../services/id-role/id-role.service';
describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
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
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});