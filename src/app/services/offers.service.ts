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
  TANIECNOWOCZESNY = "Proszę o zapisanie na zajęcia Taniec Nowoczesny dla dzieci",
  TANIECTOWARZYSKMLODZIEZ = "Proszę o zapisanie na zajęcia Taniec Towarzyski dla młodzieży",
  TANIECPRZEDSTUDNIOWKOWYMLODZIEZ = "Proszę o zapisanie na zajęcia Taniec Przedstudniówkowy",
  TANIECNOWOCZESNYMLODZIEZ = "Proszę o zapisanie na zajęcia Tańca Nowoczesnego",
  TANIECNOWOCZESNYDOROSLI = "Proszę o zapisanie na zajęcia Tańca Nowoczesnego",
  STEP = "Proszę o zapisanie na zajęcia Step",
  ZUMBA = "Proszę o zapisanie na zajęcia Zumba",
  PIERWSZYTANIEC = "Proszę o zapisanie na zajęcia Pierwszy Taniec",
  INDYWIDUALNE = "Proszę o zapisanie na zajęcia Indywidualne",
  PROAM = "Proszę o zapisanie na kurs Tańca PRO-AM",
  LATINOSOLO = "Proszę o zapisanie na kurs Tańca Latino Solo",
  LATINODLAPAR = "Proszę o zapisanie na kurs Tańca Latino Dla Par",
  UZYTKOWY = "Proszę o zapisanie na kurs Tańca Użytkowego",
};