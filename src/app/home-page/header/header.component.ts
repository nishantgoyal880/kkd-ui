import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IdRoleService } from '../../services/id-role/id-role.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesConfig } from '../config/languages.config'
import { LocationConfig } from '../config/cities.config'

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

 public loggedIn:any=false;
 public role:any;
 @Input() city: any;
 public languages=LanguagesConfig.language;
 public cities = LocationConfig.cities;
 public changedCity:any;

 constructor(private idRoleService:IdRoleService, public translate: TranslateService) {
  translate.addLangs(this.languages);
  translate.setDefaultLang('en');
  const browserLang = translate.getBrowserLang();
  translate.use(this.languages.filter(languages => browserLang.match(languages)) ? browserLang : 'en');
   this.idRoleService.role.subscribe((role) =>{
      this.role=role;
   })
   this.idRoleService.isLoggedIn.subscribe((log) =>{
      this.loggedIn=log;
   })
 }

 ngOnInit() {
 }

 changeOnClickOfLogOut(){
   this.loggedIn=false;
   this.idRoleService.isLoggedIn.emit(false);
   localStorage.removeItem("token");
   localStorage.removeItem("id");
 }

 changeCity() {
    this.city = this.changedCity;
    localStorage.setItem("user-location",this.city);
 }

 select() {
   this.changedCity = this.city;
 }

 set(city) {
   this.city = city;
   localStorage.setItem("user-location",this.city);
 }

 emitLan(x){
   this.idRoleService.currentLan.emit(x);
   localStorage.setItem("language",x);
 }

}
