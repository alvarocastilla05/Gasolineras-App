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
  gasolinera: Gasolinera = {
    "C.P.": "41400",
    Dirección: "AVENIDA DE LA CONSTITUCION, 1",
    Horario: "L-D: 24H",
    Latitud: "37.582222",
    Localidad: "ECIJA",
    "Longitud (WGS84)": "-5.084167",
    Margen: "D",
    Municipio: "ÉCIJA",
    "Precio Biodiesel": "0.000",
    "Precio Bioetanol": "0.000",
    "Precio Gas Natural Comprimido": "0.000",
    "Precio Gas Natural Licuado": "0.000",
    "Precio Gases licuados del petróleo": "0.000",
    "Precio Gasoleo A": "1.159",
    "Precio Gasoleo B": "0.000",
    "Precio Gasoleo Premium": "0.000",
    "Precio Gasolina 95 E10": "1.269",
    "Precio Gasolina 95 E5": "1.269",
    "Precio Gasolina 95 E5 Premium": "0.000",
    "Precio Gasolina 98 E10": "0.000",
    "Precio Gasolina 98 E5": "0.000",
    "Precio Hidrogeno": "0.000",
    Provincia: "SEVILLA",
    Remisión: "DM",
    Rótulo: "CEPSA",
    "Tipo Venta": "P",
    "% BioEtanol": "0.000",
    "% Éster metílico": "0.000",
    IDEESS: "ES0421",
    IDMunicipio: "41310",
    IDProvincia: "41",
    IDCCAA: "01"
  };*/



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

  gasolineraParse(gasolinera: Gasolinera): Gasolinera {
    const gasolineraString = JSON.stringify(gasolinera, this.replacer, 2);
    return JSON.parse(gasolineraString);
  }










}
