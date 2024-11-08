import { Component } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera-dto';
import { FilterDto } from '../../models/filter.dto';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

  filters: FilterDto | null = null;
  gasolineras: Gasolinera[] = [];

  onSearchClicked(filters:FilterDto){
    debugger;
    this.filters = filters;
  }
}
