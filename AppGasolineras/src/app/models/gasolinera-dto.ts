export class Gasolinera {
    constructor(
      public id: number,
      public nombre: string,
      public direccion: string,
      public postalCode: string,
      public precioGasolina98E5: number,
      public precioGasoleoA: number,
      public precioHidrogreno: number,
      public precioBioetanol: number,
      public longitud: number,
      public latitud: number
    ) {}
  }