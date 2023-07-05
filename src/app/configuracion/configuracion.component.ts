import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  opcionSeleccionada: string = '';
  usuario: string = '';
  contra: string = '';
  nombrescompletos: string = '';
  email: string = '';
  telefono: string = '';
  direccion: string = '';

  validarRes() {
    // Expresiones regulares para validar los campos del formulario
    const regexUsuario = /^[a-zA-Z0-9._-]+$/; // Solo letras, números, puntos, guiones bajos y guiones medios
    const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número
    const regexNombres = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/; // 4 palabras separadas por un espacio, cada una empezando con una letra mayúscula y seguida de letras minúsculas
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Dirección de correo electrónico válida
    const regexTelefono = /^\d{10}$/; // Número de teléfono de 10 dígitos
    const regexDireccion = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s#.,-]+$/; // Dirección válida (letras, números y algunos caracteres especiales)

    // Validar el campo "usuario"
    if (this.opcionSeleccionada === 'usuario' && !regexUsuario.test(this.usuario)) {
      alert('Por favor, ingrese un nombre de usuario válido (solo letras, números, puntos, guiones bajos y guiones medios)');
      return false;
    }

    // Validar el campo "contra"
    if (this.opcionSeleccionada === 'contra' && !regexContra.test(this.contra)) {
      alert('Por favor, ingrese una contraseña válida (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial)');
      return false;
    }

    // Validar el campo "nombrescompletos"
    if (this.opcionSeleccionada === 'nombrescompletos' && !regexNombres.test(this.nombrescompletos)) {
      alert("Por favor ingrese un nombre válido con 4 palabras separadas por un espacio, cada una empezando con una letra mayúscula y seguida de letras minúsculas");
      return false;
    }

    // Validar el campo "email"
    if (this.opcionSeleccionada === 'email' && !regexEmail.test(this.email)) {
      alert('Por favor, ingrese una dirección de correo electrónico válida');
      return false;
    }

    // Validar el campo "telefono"
    if (this.opcionSeleccionada === 'telefono' && !regexTelefono.test(this.telefono)) {
      alert('Por favor, ingrese un número de teléfono válido (10 dígitos)');
      return false;
    }

    // Validar el campo "direccion"
    if(this.opcionSeleccionada === 'direccion' && !regexDireccion.test(this.direccion)) {
      alert('Por favor, ingrese una dirección válida (solo letras, números y algunos caracteres especiales)');
      return false;
    }

    // Si todos los campos son válidos, devolver "true" para enviar el formulario
    return true;
  }
}
