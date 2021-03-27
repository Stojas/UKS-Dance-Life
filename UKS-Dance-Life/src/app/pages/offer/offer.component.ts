import { Component, HostListener, OnInit } from '@angular/core';
import { faCalendarAlt, faChevronDown, faEnvelope, faShoePrints, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

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
