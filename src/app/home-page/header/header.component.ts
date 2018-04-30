import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() success = new EventEmitter<any>();

 public searchInput:String;
 public search:String;
 public loggedIn:any=true;
 public role:any="customer";
 public routes:any;

 constructor(routes:Router) {
    routes.events.subscribe();
    this.routes=routes.url;
 }

 ngOnInit() {
 }

 sendToParent(){
   this.success.emit({'search':this.searchInput});
 }

}
