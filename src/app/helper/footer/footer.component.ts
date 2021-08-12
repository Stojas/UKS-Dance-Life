import { Component, OnInit } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isOpen: boolean = false;
  faMapMarker = faMapMarker;
  
  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
    this.isOpen = !this.isOpen;
  }
}
