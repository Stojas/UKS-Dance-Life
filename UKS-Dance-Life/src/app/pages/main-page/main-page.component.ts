import { Component, OnInit } from '@angular/core';
import { faChevronDown, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  faChevronDown = faChevronDown;
  faShoePrints = faShoePrints;
  
  constructor() { }

  ngOnInit(): void {
  }

  scroll(temp){
    temp.scrollIntoView({behavior:"smooth"});
  }

}
