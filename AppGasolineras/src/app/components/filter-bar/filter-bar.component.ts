import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {

  @Output() searchClicked = new EventEmitter<{ carburante: string, min: number, max: number}>();

  min: number = 0;
  max: number = 3;
  carburanteSeleccionado: string = '';

  filtrarPorPrecio(){
    if(this.carburanteSeleccionado && this.min !== null && this.max !== null){
      this.searchClicked.emit({carburante: this.carburanteSeleccionado, min: this.min, max: this.max});
    }else{
      alert('Debes seleccionar un carburante y un rango de precios');
    }
  }
}
