import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() success = new EventEmitter<any>();

 public searchInput:String;
 public search:String;
 public loggedIn:any=false;
 public role:any="customer";

 constructor() { }

 ngOnInit() {
}

 sendToParent(){
   this.success.emit({'search':this.searchInput});
 }

}
