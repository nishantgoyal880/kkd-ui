import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 @ViewChild('langBtn') langBtn : ElementRef;
 @ViewChild('closeModal') closeModal : ElementRef;
  constructor(private router:Router, private translate:TranslateService) {
  }

  ngOnInit() {
    this.translate.use(localStorage.getItem("language"));
    if(localStorage.getItem("counter")!="1")
    this.langBtn.nativeElement.click();
  }

  searchInput: String;

  public setDataFromChild(event){
    this.searchInput=event.search;
  }

  chooseLang(language){
    localStorage.setItem("counter","1");
    switch(language){
      case 'hindi': localStorage.setItem("language",'हिंदी');
      break;
      case 'en': localStorage.setItem("language",'en');
      break;
      case 'punjabi': localStorage.setItem("language",'ਪੰਜਾਬੀ');
      break;
      case 'tamil': localStorage.setItem("language",'தமிழ்');
      break;
      case 'telegu': localStorage.setItem("language",'తెలుగు');
      break;
    }
    this.translate.use(localStorage.getItem("language"));
    this.closeModal.nativeElement.click();
  }
}


