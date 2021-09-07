import { OffersService } from './../../services/offers.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { faCalendarAlt, faChevronDown, faEnvelope, faShoePrints, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { StateService } from 'src/app/state.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public form: FormGroup;
  faEvelope = faEnvelope;
  link: string = 'mailto:stojko.lukasz@gmail.com?subject=Zapisy na zajęcia';

  constructor(private stateService: StateService, public sanitizer: DomSanitizer, public offerService: OffersService, public http: HttpClient) { }


  ngOnInit(): void {
    this.stateService.isMain.next(false);
    this.form = new FormGroup({
      name: new FormControl(null, Validators.minLength(3)),
      lastname: new FormControl(null, Validators.minLength(3)),
      phone: new FormControl(null, Validators.maxLength(9)),
      message: new FormControl(null, Validators.minLength(20)),
    })

    if(this.offerService.getMessage().length){
      this.form.controls['message'].setValue(this.offerService.getMessage());
      if(this.form.controls['message'].value){
        this.link = '' + this.link + '&body=' + this.form.controls['message'].value;
      }
    }
  }

  scroll(temp){
    temp.scrollIntoView({behavior:"smooth"});
  }  
  

  sendMessage(){
    console.warn("SEnd message", this.form);
    if(this.form.controls['message'].value){
      this.link = '' + this.link + '&body=' + this.form.controls['message'].value;
    }
  }

}
