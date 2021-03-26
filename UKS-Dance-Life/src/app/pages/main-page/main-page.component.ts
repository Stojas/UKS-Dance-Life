import { Component, HostListener, OnInit } from '@angular/core';
import { faCalendarAlt, faChevronDown, faEnvelope, faShoePrints, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  faChevronDown = faChevronDown;
  faShoePrints = faShoePrints;
  faCalendarAlt = faCalendarAlt;
  faEvelope = faEnvelope;
  faUserFriends = faUserFriends;
  
  constructor() { }


  ngOnInit(): void {
  }

  scroll(temp){
    temp.scrollIntoView({behavior:"smooth"});
  }  

}
