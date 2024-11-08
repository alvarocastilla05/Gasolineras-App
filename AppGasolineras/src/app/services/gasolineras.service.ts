import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GasolinerasService {

  constructor(private http: HttpClient) { }

  getGasolineras(){
    return this.http.get('http://localhost:3000/ListaEESSPrecio');
  }

  
}
