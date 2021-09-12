import { OffersService } from './../../services/offers.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { faCalendarAlt, faCheck, faChevronDown, faEnvelope, faShoePrints, faSpellCheck, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { StateService } from 'src/app/state.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public form: FormGroup;
  faEvelope = faEnvelope;
  faCheck = faCheck;
  link: string = 'mailto:stojko.lukasz@gmail.com?subject=Zapisy na zajęcia';
  public error: boolean = false;
  public errText = 'Wystąpił błąd. Prosimy o kontakt telefoniczny lub poprzez social media!';
  public success: boolean = false;

  constructor(private stateService: StateService, public sanitizer: DomSanitizer, public offerService: OffersService, public http: HttpClient) { }


  ngOnInit(): void {
    this.stateService.isMain.next(false);
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      agreement: new FormControl(null, [Validators.requiredTrue]),
      message: new FormControl(null, [Validators.minLength(20), Validators.required]),
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
    this.form.markAllAsTouched();
    if(this.form.valid){
     
      const email = this.form.controls['message'].value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mvoddwwj',
        { name: this.form.controls['name'].value + ' ' + this.form.controls['lastname'].value, message: this.form.controls['message'].value + ' Nr. kontaktowy: ' + this.form.controls['phone'].value },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            this.success = true;

            setTimeout(() => {
              this.success = false;
            }, 5000);
          }, err => {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 5000);
          }
        );
    }else{
      this.errText = 'Wszystkie pola formularza są wymagane. Wypełnij pola i spróbuj ponownie!'
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }
  }

}
