import { Component } from '@angular/core';
import { Gasolinera } from '../../models/gasolinera-dto';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.css'
})
export class ScreenComponent {

  postalCode: String | undefined;
  gasolineras: Gasolinera[] = [];

  onSearchClicked(postalCode: string){
    debugger;
    return this.postalCode = postalCode;
  }
}
