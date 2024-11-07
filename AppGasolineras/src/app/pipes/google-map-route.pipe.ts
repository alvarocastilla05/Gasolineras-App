import { Pipe, PipeTransform } from '@angular/core';
import { Gasolinera } from '../models/gasolinera-dto';

@Pipe({
  name: 'googleMapRoute'
})
export class GoogleMapRoutePipe implements PipeTransform {

  transform(gasolinera: Gasolinera) {
    return `https://www.google.com/maps/dir/?api=1&destination=${this.sanitizeValue(gasolinera.latitud)},${this.sanitizeValue(gasolinera.longitud)}&travelmode=driving`;
  }

  sanitizeValue(value: number): string {
    return value.toString().replace(',', '.');
   
  }

}
