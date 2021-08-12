import { ThrowStmt } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { faCalendarAlt, faChevronDown, faChevronLeft, faChevronRight, faEnvelope, faShoePrints, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { OffersService, STATES } from 'src/app/services/offers.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  STATES = STATES;

  constructor(private stateService: StateService, public offersService: OffersService) { }


  ngOnInit(): void {
    this.stateService.isMain.next(false);
  }

  scroll(temp){
    temp.scrollIntoView({behavior:"smooth"});
  }  

  setMessage(el: STATES){
    this.offersService.newMessage(el);
  }

}
