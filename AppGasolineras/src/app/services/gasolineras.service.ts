import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GasolineraListResponse } from '../models/gasolinera-response.interfaces';
import { Gasolinera } from '../models/gasolinera-dto';
import { PostalCode } from '../models/cp.interfaces';
import { CCAA } from '../models/comunidades.interfaces';
import { Provincia } from '../models/provincia.interfaces';



@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<Gasolinera>{
    //return this.http.get<Gasolinera>('https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/');
    return this.http.get<Gasolinera>('http://localhost:3000/ListaEESSPrecio');
  }

  getPostalCodeList(): Observable<PostalCode[]>{
    return this.http.get<PostalCode[]>('http://localhost:3000/code-list');
  }

  getComunidades(): Observable<CCAA[]> {
    return this.http.get<CCAA[]>('http://localhost:3000/comunidades');
  }

  getProvincias(IDCCAA: string): Observable<Provincia[]>{
    return this.http.get<Provincia[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProvinciasPorComunidad/${IDCCAA}`);
  }



  

}
