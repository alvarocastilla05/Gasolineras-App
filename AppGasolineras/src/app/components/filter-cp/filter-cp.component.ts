import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-cp',
  templateUrl: './filter-cp.component.html',
  styleUrl: './filter-cp.component.css'
})
export class FilterCpComponent {

  postalCode: string = '';
  @Output() postalCodeChange = new EventEmitter<string>();

  filtrarPorCp() {
    this.postalCodeChange.emit(this.postalCode);
  }

}
