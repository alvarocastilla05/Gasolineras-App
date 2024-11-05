import { Component, OnInit } from '@angular/core';
import { GasolinerasService } from '../../services/gasolineras.service';
import { Gasolinera } from '../../models/gasolinera-dto';


@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrl: './gasolinera.component.css'
})
export class GasolineraComponent implements OnInit {

  listadoGasolineras: Gasolinera[] = [];

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
      //Transform la respuesta del API en String (JSON)
      const responseString = JSON.stringify(respuesta);
      let parsedData;
      try{
        //Transforma el String en un objeto JSON
        parsedData = JSON.parse(responseString);
        let arrayGasolineras = parsedData['ListaEESSPrecio'];
        const sanitizedData = this.cleanProperties(parsedData);
        console.log('Sanitized Data:', sanitizedData);

      }catch(error){
        console.error('Error parsing JSON', error);
      }
    })

  }

  private cleanProperties(arrayGasolineras: any) {
    let newArray = [];
    arrayGasolineras.forEach((gasolineraChusquera: any) => {
      const gasolineraConNombresBuenos: any = {};

      //Recorro los nombres de los aributos de la gasolinera que están mal escritos
      Object.keys(gasolineraChusquera).forEach(key => {
        //En la variable key tengo el nombre
        //de la propiedad que estoy recorriendo

        if(key === 'C.P.'){
          gasolineraConNombresBuenos['postalCode'] = gasolineraChusquera[key];
        }
      });
      let gasolinera = new Gasolinera();
      newArray.push(gasolineraConNombresBuenos);
    });
  }

  

  









}
