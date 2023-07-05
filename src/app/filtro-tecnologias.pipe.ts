import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filtrotecnologia'
  })
  export class FiltrotecnologiaPipe implements PipeTransform {
    transform(tecnologias: any[], edificio: string, activo: string): any[] {
      // Implementa aquí la lógica de filtrado
      // En este ejemplo, se realiza el filtrado de acuerdo a los valores ingresados en los campos de búsqueda
      return tecnologias.filter((tecnologia) => {
        return tecnologia.edificio.toLowerCase().includes(edificio.toLowerCase())
          && tecnologia.activo.toLowerCase().includes(activo.toLowerCase())
      });
    }
  }