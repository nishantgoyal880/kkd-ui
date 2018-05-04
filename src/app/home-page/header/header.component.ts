import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IdRoleService } from '../../services/id-role/id-role.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

 public loggedIn:any=false;
 public role:any;
 @Input() city: any;

 constructor(private idRoleService:IdRoleService, private translate: TranslateService) {
   
  translate.setDefaultLang('en');
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
 }
 switchLanguage(language: string) {
  this.translate.use(language);
}
}


