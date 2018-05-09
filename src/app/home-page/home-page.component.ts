import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    
  }

  searchInput: String;

  public setDataFromChild(event){
    this.searchInput=event.search;
  }
}


