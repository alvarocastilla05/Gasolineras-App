import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PostalCode } from '../../models/cp.interfaces';
import { GasolinerasService } from '../../services/gasolineras.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {

  postalCode: string | undefined;
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


}
