import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { faCalendarAlt, faChevronDown, faEnvelope, faShoePrints, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  url = "https://www.google.com/maps/embed/place/Pozna%C5%84ska+42,+88-110+Inowroc%C5%82aw/@52.7885233,18.2580125,16.48z/data=!4m5!3m4!1s0x470350f29973baf5:0x989ee9a509b69735!8m2!3d52.7896908!4d18.2609614";
  // src =  this.url.replace("watch?v=", "v/");
  src = this.url;
  
  constructor(private stateService: StateService, public sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    this.stateService.isMain.next(false);
  }

  scroll(temp){
    temp.scrollIntoView({behavior:"smooth"});
  }  

}
