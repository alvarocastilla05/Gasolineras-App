import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraListResponse } from '../models/gasolinera-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<GasolineraListResponse> {
    return this.http.get<GasolineraListResponse>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/EstacionesTerrestres/');
  }
}
