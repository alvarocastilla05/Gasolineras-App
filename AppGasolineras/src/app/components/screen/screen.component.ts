import { Component } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera-dto';
import { FilterDto } from '../../models/filter.dto';
import { CCAA } from '../../models/comunidades.interfaces';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

  postalCode: String | undefined;
  comunidad: CCAA | undefined;
  gasolineras: Gasolinera[] = [];
  filters: FilterDto | null = null;

  onSearchClicked1(postalCode: string){
    
    return this.postalCode = postalCode;

  }

  onSearchClicked2(filters:FilterDto){
  
    this.filters = filters;
  }

  onSearchClicked3(comunidad: CCAA){
  
    this.comunidad = comunidad;
  }

  
}
