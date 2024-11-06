import { Component, Input } from '@angular/core';
import { Gasolinera } from '../../../models/gasolinera-dto';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrl: './menu-nav.component.css'
})
export class MenuNavComponent {

  listadoGasolineras: Gasolinera[] = [];
  @Input() postalCode: string | undefined;

  filtrarPorCarburante(carburante: string) {
    if(carburante == 'Gasolina'){
      this.listadoGasolineras = this.listadoGasolineras.filter((gasolinera) => gasolinera.precioGasolina98E5 != null);
    }
    if(carburante == 'Gasoleo A'){
      this.listadoGasolineras = this.listadoGasolineras.filter((gasolinera) => gasolinera.precioGasoleoA != null);
    }
    if(carburante == 'Hidrogeno'){
      this.listadoGasolineras = this.listadoGasolineras.filter((gasolinera) => gasolinera.precioHidrogreno != null);
    }
  }

  filtrarPorCodigoPostal() {
    this.listadoGasolineras = this.listadoGasolineras.filter((gasolinera) => {
      return gasolinera.postalCode === this.postalCode;

    });
  }

}
