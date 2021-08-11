import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private _currentMessage: string = '';



  constructor() { }

  public newMessage(message: string){
    this._currentMessage = message;
  }

  public getMessage(){
    return this._currentMessage;
  }

  private _removeMessage(){
    this._currentMessage = '';
  }
}

export enum STATES {
  TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha!",
  TANIECTOWARZYSKIDZIECI = "Proszę o zapisanie na zajęcia Taniec Towarzyski dla dzieci",
  TANIECNOWOCZESNY = "Proszę o zapisanie na zajęcia Taniec Nowoczesny",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
  // TANECZNYMIXMALUCHA = "Proszę o zapisanie na zajęcia Taneczny Mix Malucha",
};