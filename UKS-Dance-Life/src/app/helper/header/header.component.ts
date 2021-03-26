import { Component, HostListener, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  faTimes = faTimes;
  isOpen: boolean = false;

  isScrolled: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScroll($event: Event): void {
    if($event) {
      console.warn("EVENT",$event);
      console.warn("DOCUMENT", document.documentElement.scrollTop);
      if(document.documentElement.scrollTop !== 0 && (this.isScrolled.getValue() == false || this.isScrolled.getValue() == null)){
        this.isScrolled.next(true);
      }else if(document.documentElement.scrollTop == 0 && this.isScrolled.getValue() == true){
        this.isScrolled.next(false);
      }
    }
  }
  
  showMenu(){
    this.isOpen = !this.isOpen;
  }
}
