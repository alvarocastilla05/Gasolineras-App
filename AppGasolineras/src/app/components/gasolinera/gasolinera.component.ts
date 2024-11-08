import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { GasolinerasService } from '../../services/gasolineras.service';
import { Gasolinera } from '../../models/gasolinera-dto';
import { FilterDto } from '../../models/filter.dto';


@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrl: './gasolinera.component.css'
})
export class GasolineraComponent implements OnInit, OnChanges {

  @Input() filters: FilterDto | null = null;
  @Input() gasolineras: Gasolinera[] = [];
  listadoGasolineras: Gasolinera[] = [];
  gasolineraFiltrada: Gasolinera[] = [];

  constructor(private gasolineraService: GasolinerasService) { }

  ngOnInit() {
    this.gasolineraService.getGasolineras().subscribe((respuesta) => {
      // Transformo la respuesta del API en String (JSON)
      const respuestaEnString = JSON.stringify(respuesta);
      let parsedData;
      try {
        // Transformo el String en un objeto JSON
        parsedData = JSON.parse(respuestaEnString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        this.listadoGasolineras = this.cleanProperties(arrayGasolineras);
        this.gasolineraFiltrada = this.listadoGasolineras;
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }

 ngOnChanges(changes: SimpleChanges): void {
    if(changes['filters']) {
      this.applyFilters();
    }
 }



  private cleanProperties(arrayGasolineras: any) {
    let newArray: Gasolinera[] = [];
    arrayGasolineras.forEach((gasolineraChusquera: any) => {
      const gasolineraConNombresGuenos: any = {};

      // Recorro los nombres de los atributo de la
      // gasolineraChusquera que están mal escritos
      /*Object.keys(gasolineraChusquera).forEach((key) => {
        // En la variable key tengo el nombre de la
        // propiedad que estoy recorriendo
        if (key === 'C.P.') {
          gasolineraConNombresGuenos['postalCode'] = gasolineraChusquera[key];
        }
      });
      */
      let gasolinera = new Gasolinera(
        gasolineraChusquera['IDEESS'],
        gasolineraChusquera['Rótulo'],
        gasolineraChusquera['Dirección'],
        gasolineraChusquera['C.P.'],
        this.corregirPrecio(gasolineraChusquera['Precio Gasolina 98 E5']),
        this.corregirPrecio(gasolineraChusquera['Precio Gasoleo A']),
        this.corregirPrecio(gasolineraChusquera['Precio Hidrogeno']),
        this.corregirPrecio(gasolineraChusquera['Precio Bioetanol']),
        gasolineraChusquera['Longitud (WGS84)'],
        gasolineraChusquera['Latitud'],
      );

      newArray.push(gasolinera);
    });
    return newArray;
  }

  private corregirPrecio(precio: string): number {
    const precioCorregido = parseFloat(precio.replace(',', '.'));
    return isNaN(precioCorregido) ? 0 : precioCorregido;
  }

  /*private applyFilters() {
    //Lista vacia
    this.gasolineraFiltrada = [];

    if (this.filters) {
      this.gasolineras.filter((gasolinera) => {
        let precio = 0;
        if(this.filters != null){
        switch (this.filters.carburante) {
          case 'Gasolina98':
            precio = gasolinera.precioGasolina98E5;
            break;
          case 'GasoleoA':
            precio = gasolinera.precioGasoleoA;
            break;
          case 'Hidrogeno':
            precio = gasolinera.precioHidrogreno;
            break;
          case 'Bioetanol':
            precio = gasolinera.precioBioetanol;
            break;
          default:
            precio = 0;
            break;
        }

        if (
          precio > 0 &&
          precio >= this.filters.min &&
          precio <= this.filters.max
        ) {
          this.gasolineraFiltrada.push(gasolinera);
        }

      }

      }
      );}
    }
  }*/

    
  private applyFilters(){
    //Lista vacia
    this.gasolineraFiltrada = []; 

    if(this.filters){
      for(let gasolinera of this.listadoGasolineras){
        let precio = 0;
        switch(this.filters.carburante){
          case 'Gasolina98':
            precio = gasolinera.precioGasolina98E5;
            break;
          case 'GasoleoA':
            precio = gasolinera.precioGasoleoA;
            break;
          case 'Hidrogeno':
            precio = gasolinera.precioHidrogreno;
            break;
          case 'Bioetanol':
            precio = gasolinera.precioBioetanol;
            break;
        }

        if(
          precio > 0 &&
          precio >= this.filters.min &&
          precio <= this.filters.max
        ){
          this.gasolineraFiltrada.push(gasolinera);
        }
        
      }
    }
  }

}




