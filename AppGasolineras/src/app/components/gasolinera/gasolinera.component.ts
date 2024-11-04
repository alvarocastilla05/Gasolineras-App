import { Component, OnInit } from '@angular/core';
import { GasolinerasService } from '../../services/gasolineras.service';
import { Gasolinera, GasolineraListResponse } from '../../models/gasolinera-response.interfaces';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrl: './gasolinera.component.css'
})
export class GasolineraComponent implements OnInit {

 listadoGasolineras: Gasolinera[] = []
 


  constructor(private gasolineraService: GasolinerasService) { }

  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(respuesta => {
      this.listadoGasolineras = respuesta.ListaEESSPrecio;  
    });
    
    
  }
  replacer(key: string, value: any): any {
    if (key === "string") {
      key.replaceAll(" ", "");
    }
    return value; 
  }

  gasolineraParse (): Gasolinera{
    const gasolineraString = JSON.stringify(this.listadoGasolineras, this.replacer); 
    return JSON.parse(gasolineraString);
  }

  






}
