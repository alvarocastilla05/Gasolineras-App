import { Component, OnInit } from '@angular/core';
import { GasolinerasService } from '../../services/gasolineras.service';
import { Gasolinera } from '../../models/gasolinera-dto';
import { GasolineraMala } from '../../models/gasolinera-response.interfaces';


@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrl: './gasolinera.component.css'
})
export class GasolineraComponent implements OnInit {

  listadoGasolineras: Gasolinera[] = [];


  constructor(private gasolineraService: GasolinerasService) {}

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
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
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
        gasolineraChusquera['C.P.'],
        gasolineraChusquera['Precio Gasolina 98 E5'],
        gasolineraChusquera['Precio Gasoleo A'],
        gasolineraChusquera['Precio Hidrogeno'],

      );

      newArray.push(gasolinera);
    });
    return newArray;
  }


  
}