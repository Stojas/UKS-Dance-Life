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
  TANECZNYMIX = "Proszę o zapisanie na zajęcia Taneczny Mix!",
  TANIECTOWARZYSKIDZIECI = "Proszę o zapisanie mojego dziecka na zajęcia Taniec towarzyski dla dzieci!",
  TANIECNOWOCZESNY = "Proszę o zapisanie mojego dziecka na zajęcia Taniec nowoczesny!",
  HIPHOPKIDS = "Proszę o zapisanie mojego dziecka na zajęcia Hip-Hop Kids!",
  TANIECNOWOCZESNYDOROSLI = "Proszę o zapisanie na zajęcia Tańca Nowoczesnego",
  TANIECTOWARZYSKIDOROSLI = "Proszę o zapisanie na kurs tańca towarzyskiego!",
  TANIECUZYTKOWY = "Proszę o zapisanie na kurs tańca użytkowego!",
  ZUMBA = "Proszę o zapisanie na zajęcia Zumba!",
  PIERWSZYTANIEC = "Proszę o zapisanie na zajęcia Pierwszy Taniec!",
  INDYWIDUALNE = "Proszę o zapisanie na zajęcia indywidualne!",
  PROAM = "Proszę o zapisanie na kurs tańca PRO-AM!",
  LATINOSOLO = "Proszę o zapisanie na zajęcia Ladies Latino Solo!",
  LATINODLAPAR = "Proszę o zapisanie na zajęcia Latino Mix!",
  UZYTKOWY = "Proszę o zapisanie na kurs Tańca Użytkowego",
  HIGHHEELS = "Proszę o zapisanie na zajęcia High Heels",
  BACHATA = "Proszę o zapisanie na zajęcia Bachaty",
  SALSA = "Proszę o zapisanie na zajęcia Salsy",
  RUEDA = "Proszę o zapisanie na zajęcia Rueda de Casino",
  CARDIOFITNESS = "Proszę o zapisanie na zajęcia Cardio Fitness"
};