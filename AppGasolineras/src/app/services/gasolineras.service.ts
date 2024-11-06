import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GasolineraListResponse } from '../models/gasolinera-response.interfaces';
import { Gasolinera } from '../models/gasolinera-dto';

@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) { }

  getGasolineras(){
    return this.http.get('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
  }

  private postalCodeOriginal = new BehaviorSubject<string>('');
  codigoPostalActual = this.postalCodeOriginal.asObservable();

  changePostalCode(postalCode: string) {
    this.postalCodeOriginal.next(postalCode);
  }

 
}
