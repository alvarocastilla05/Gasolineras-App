import { Component, Input } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera-dto';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

  @Input() filters: { carburante: string, min: number, max: number} | null = null;
  gasolineras: Gasolinera[] = [];

  onSerchClicked(filters: { carburante: string, min: number, max: number}){

    this.filters = filters;
  }
}
