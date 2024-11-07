import { Component } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera-dto';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

  gasolineras: Gasolinera[] = [];
}
