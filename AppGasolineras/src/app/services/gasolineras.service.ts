import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GasolineraListResponse } from '../models/gasolinera-response.interfaces';
import { Gasolinera } from '../models/gasolinera-dto';
import { PostalCode } from '../models/cp.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<Gasolinera>{
    return this.http.get<Gasolinera>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
  }

  getPostalCodeList(): Observable<PostalCode[]>{
    return this.http.get<PostalCode[]>('https://localhost:3000/code-list');
  }

}
