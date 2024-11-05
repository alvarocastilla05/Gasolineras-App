import { Component, OnInit } from '@angular/core';
import { GasolinerasService } from '../../services/gasolineras.service';
import { Gasolinera } from '../../models/gasolinera-response.interfaces';

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

  replacer(key: string, value: string): string {
    if (key.includes(' ')) {
        key = key.replace(' ', '_');
      return key;
    }
    if(key.includes('(')){
      key = key.replace('(', '');
      
      return key;
    }
    if(key.includes(')')){
      key = key.replace(')', '');
      
      return key;
    }
    if(key.includes('%')){
      key = key.replace('%', '');
      
      return key;
    }
    if(key.includes('.')){
      key = key.replace('.', '');
      
      return key;
    }
    if(key.includes('/')){
      key = key.replace('/', '');
      
      return key;
    }
    return key;
  }

  filtrarPorRotulo(rotulo: string): Gasolinera[] {
    return this.listadoGasolineras.filter(gasolinera => gasolinera.Rótulo === rotulo);
  }









}
