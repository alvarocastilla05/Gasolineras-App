
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { PostalCode } from '../../models/cp.interfaces';
import { GasolinerasService } from '../../services/gasolineras.service';
import { FilterDto } from '../../models/filter.dto';
import { CCAA } from '../../models/comunidades.interfaces';
import { Provincia } from '../../models/provincia.interfaces';


@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent implements OnInit, OnChanges{

  postalCode: string | undefined;
  
  min: number = 0;
  max: number = 3;
  carburanteSeleccionado: string = '';

  myControl = new FormControl('');
  options: string[] = [];
  listadoCP: PostalCode[] = [];
  filteredOptions: Observable<string[]> | undefined;

  listadoComunidades: CCAA[] | undefined;
  listadoProvincias: Provincia[] | undefined;
  comunidad: CCAA | undefined; 
  provincia: Provincia | undefined;

  @Output() searchClicked = new EventEmitter<FilterDto>();
  @Output () postalCodeSeleccionado = new EventEmitter<string>();
  @Output() comunidadSeleccionada = new EventEmitter<CCAA>();

  constructor(private gasolineraService: GasolinerasService){}

  ngOnInit() {
    this.gasolineraService.getPostalCodeList().subscribe((respuesta) => {
      this.listadoCP = respuesta;
      this.listadoCP.forEach(codPos => {
        if(this.options.includes(codPos.codigo_postal.toString())){
          //Aquí el método no hace nada. YA LO SÉ, HACER ESTO ES UNA CHUSQUERÍA DE LAS GORDAS.
        }else{
          this.options.push(codPos.codigo_postal.toString());
        }
      })
    })
    this.gasolineraService.getComunidades().subscribe((respuesta) => {
      this.listadoComunidades = respuesta;
    });
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  //-----------------------------------------------------------------------------------

  /*loadComunidades(){
    this.gasolineraService.getComunidades().subscribe((respuesta) => {
      this.listadoComunidades = respuesta;
    })
  }

  loadProvincias(){
    if(this.comunidadSeleccionada){
      this.gasolineraService.getProvincias(this.comunidadSeleccionada.IDCCAA).subscribe((respuesta) => {
        this.listadoProvincias = respuesta;
      })
    }else{
      alert('Debes seleccionar una comunidad autónoma');
    }
  }*/

  filtrarPorCP(){
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

  filtrarPorCCAAoProvincia(){
    if(this.comunidad){
      if(this.comunidad && this.provincia == undefined){
        this.comunidadSeleccionada.emit(this.comunidad);
      }else{
        this.comunidadSeleccionada.emit(this.provincia);
      }
    }else{
      alert('Debes seleccionar una comunidad autónoma');
    }
  }


  filtrarPorComunidad(){
    debugger;
    if(this.comunidadSeleccionada){
      this.comunidadSeleccionada.emit(this.comunidad);
    }else{
      alert('Debes seleccionar una comunidad autónoma');
    }
  }

  filtrarPorProvincia(){
    debugger;
    if(this.provincia){
      this.comunidadSeleccionada.emit(this.provincia);
    }else{
      alert('Debes seleccionar una provincia');
    }
  }

}
