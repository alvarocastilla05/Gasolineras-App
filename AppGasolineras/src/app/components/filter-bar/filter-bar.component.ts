
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PostalCode } from '../../models/cp.interfaces';
import { GasolinerasService } from '../../services/gasolineras.service';
import { FilterDto } from '../../models/filter.dto';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {


  postalCode: string | undefined;
  
  min: number = 0;
  max: number = 3;
  carburanteSeleccionado: string = '';
  @Output() searchClicked = new EventEmitter<FilterDto>();
  @Output () postalCodeSeleccionado = new EventEmitter<string>();

  myControl = new FormControl('');
  options: string[] = [];
  listadoCP: PostalCode[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private gasolineraService: GasolinerasService){}

  ngOnInit() {
    this.gasolineraService.getPostalCodeList().subscribe((respuesta) => {
      this.listadoCP = respuesta;
      this.listadoCP.forEach(codPos => {
        if(this.options.includes(codPos.codigo_postal.toString())){
          //El método no hagas nada.
        }else{
          this.options.push(codPos.codigo_postal.toString());
        }
      })

    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  filtrarPorCP(){
    debugger;
    if(this.postalCode){
      this.postalCodeSeleccionado.emit(this.postalCode);
    }else{
      alert('C.P. no encontrado.')
    }
  }

  filtrarPorPrecio(){
    if(this.carburanteSeleccionado && this.min !== null && this.max !== null){
      this.searchClicked.emit(new FilterDto(this.carburanteSeleccionado, this.min, this.max));
    }else{
      alert('Debes seleccionar un carburante y un rango de precios');
    }
  }

}
