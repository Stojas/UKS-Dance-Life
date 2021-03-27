import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public isMain: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }
}
