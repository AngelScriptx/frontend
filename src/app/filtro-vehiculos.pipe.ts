import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroVehiculos'
})
export class FiltroVehiculosPipe implements PipeTransform {
  transform(vehiculos: any[], placa: string, marca: string, modelo: string, anio: string, color: string): any[] {
    // Implementa aquí la lógica de filtrado
    // En este ejemplo, se realiza el filtrado de acuerdo a los valores ingresados en los campos de búsqueda
    return vehiculos.filter((vehiculo) => {
      return vehiculo.Placa.toLowerCase().includes(placa.toLowerCase())
        && vehiculo.Marca.toLowerCase().includes(marca.toLowerCase())
        && vehiculo.Modelo.toLowerCase().includes(modelo.toLowerCase())
        && vehiculo.Anio.toString().includes(anio)
        && vehiculo.Color.toLowerCase().includes(color.toLowerCase());
    });
  }
}

