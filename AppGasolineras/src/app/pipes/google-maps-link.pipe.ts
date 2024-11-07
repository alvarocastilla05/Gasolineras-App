import { Pipe, PipeTransform } from '@angular/core';
import { Gasolinera } from '../models/gasolinera-dto';

@Pipe({
  name: 'googleMapsLink'
})
export class GoogleMapsLinkPipe implements PipeTransform {

  transform(gasolinera: Gasolinera) {
    return `http://maps.google.com/?q=${this.sanitizeValue(gasolinera.latitud)},${this.sanitizeValue(gasolinera.longitud)}`;
  }

  sanitizeValue(value: number): string {
    return value.toString().replace(',', '.');
   
  }

}
