import { Component } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {
  vehiculos = [
    { Placa: 'ABC1233', Marca: 'Toyota', Modelo: 'Corolla', Anio: 2020, Color: 'Blanco' },
    { Placa: 'XYZ1897', Marca: 'Honda', Modelo: 'Civic', Anio: 2018, Color: 'Negro' },
    { Placa: 'ZZZ9999', Marca: 'Honda', Modelo: 'Civic', Anio: 2019, Color: 'Rojo' },
    { Placa: 'ZXY4321', Marca: 'Chevrolet', Modelo: 'Onix LTZ Turbo', Anio: 2020, Color: 'Rojo' },
  ];

  filtroPlaca: string = '';
  filtroMarca: string = '';
  filtroModelo: string = '';
  filtroAnio: string = '';
  filtroColor: string = '';

  eliminarVehiculo(vehiculo: any) {
    // Se obtiene el índice del vehículo dentro del arreglo de vehículos
    const index = this.vehiculos.indexOf(vehiculo);
  
    // Se verifica si el índice es válido (-1 indica que no se encontró el vehículo en el arreglo)
    if (index !== -1) {
      // Se utiliza el método splice para eliminar 1 elemento a partir del índice encontrado
      this.vehiculos.splice(index, 1);
    }
  }

  agregarVehiculo() {
    // Validar los campos antes de agregar el vehículo
    if (this.validarCampos()) {
      // Agregar el vehículo a la lista
      const nuevoVehiculo = {
        Placa: this.filtroPlaca,
        Marca: this.filtroMarca,
        Modelo: this.filtroModelo,
        Anio: parseInt(this.filtroAnio),
        Color: this.filtroColor
      };
      this.vehiculos.push(nuevoVehiculo);

      // Limpiar los campos del formulario
      this.filtroPlaca = '';
      this.filtroMarca = '';
      this.filtroModelo = '';
      this.filtroAnio = '';
      this.filtroColor = '';
    }
  }

  validarCampos(): boolean {
    // Validar cada campo del formulario utilizando expresiones regulares

    // Validar la placa (3 letras seguidas de 4 números)
    const placaRegex = /^[A-Z]{3}\d{4}$/;
    if (!placaRegex.test(this.filtroPlaca)) {
      alert('Placa inválida. El formato debe ser: AAA9999');
      return false;
    }

    // Validar el modelo (solo letras,numeros y espacios permitidos)
    const modeloRegex = /^[A-Za-z0-9\s]{1,25}$/;
if (!modeloRegex.test(this.filtroModelo)) {
  alert('Modelo inválido. Solo se permiten letras, números y espacios (máximo 25 caracteres sin contar los espacios).');
  return false;
}

     // Validar el año (4 dígitos numéricos a partir de 2000)
  const anioRegex = /^2\d{3}$/;
  if (!anioRegex.test(this.filtroAnio)) {
    alert('Año inválido. Debe ser a partir de 2000 y contener 4 dígitos numéricos.');
    return false;
  }

    return true;
  }
}
