import { Component, OnInit } from '@angular/core';
import { GasolinerasService } from '../../services/gasolineras.service';
import { Gasolinera } from '../../models/gasolinera-response.interfaces';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrl: './gasolinera.component.css'
})
export class GasolineraComponent implements OnInit {

  listadoGasolineras: Gasolinera[] = []

  /*
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }*/




  constructor(private gasolineraService: GasolinerasService) { }



  ngOnInit(): void {
    this.gasolineraService.getGasolineras().subscribe(respuesta => {
      this.listadoGasolineras = respuesta.ListaEESSPrecio;

    });

  }

  replacer(key: string, value: string): string {
    if (key.includes(' ')) {
        key = key.replace(' ', '_');
      return key;
    }
    if(key.includes('(')){
      key = key.replace('(', '');
      
      return key;
    }
    if(key.includes(')')){
      key = key.replace(')', '');
      
      return key;
    }
    if(key.includes('%')){
      key = key.replace('%', '');
      
      return key;
    }
    if(key.includes('.')){
      key = key.replace('.', '');
      
      return key;
    }
    if(key.includes('/')){
      key = key.replace('/', '');
      
      return key;
    }
    return key;
  }

  filtrarPorRotulo(rotulo: string): Gasolinera[] {
    return this.listadoGasolineras.filter(gasolinera => gasolinera.Rótulo === rotulo);
  }









}
