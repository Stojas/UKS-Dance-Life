import { Component, HostListener, OnInit } from '@angular/core';
import { faCalendarAlt, faChevronDown, faEnvelope, faShoePrints, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  faChevronDown = faChevronDown;
  faShoePrints = faShoePrints;
  faCalendarAlt = faCalendarAlt;
  faEvelope = faEnvelope;
  faUserFriends = faUserFriends;
  
  constructor(private stateService: StateService) { }


  ngOnInit(): void {
    this.stateService.isMain.next(false);
  }

  scroll(temp){
    temp.scrollIntoView({behavior:"smooth"});
  }  

}
