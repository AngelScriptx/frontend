import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  Validarres() {
    // Obtener los valores de los campos del formulario
    const usuario = (document.getElementsByName('usuario')[0] as HTMLInputElement).value.trim();
    const contra = (document.getElementsByName('contra')[0] as HTMLInputElement).value.trim();
    const nombrescompletos = (document.getElementsByName('nombrescompletos')[0] as HTMLInputElement).value.trim();
    const email = (document.getElementsByName('email')[0] as HTMLInputElement).value.trim();
    const telefono = (document.getElementsByName('telefono')[0] as HTMLInputElement).value.trim();
    const direccion = (document.getElementsByName('direccion')[0] as HTMLInputElement).value.trim();

    // Expresiones regulares para validar los campos del formulario
    const regexUsuario = /^[a-zA-Z0-9._-]+$/; // Solo letras, números, puntos, guiones bajos y guiones medios
    const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número
    const regexNombres  = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Dirección de correo electrónico válida
    const regexTelefono = /^\d{10}$/; // Número de teléfono de 10 dígitos
    const regexDireccion = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s#.,-]+$/; // Dirección válida (letras, números y algunos caracteres especiales)

    // Validar el campo "usuario"
    if (!regexUsuario.test(usuario)) {
      alert('Por favor, ingrese un nombre de usuario válido (solo letras, números, puntos, guiones bajos y guiones medios)');
      return false;
    }
  
    // Validar el campo "contra"
    if (!regexContra.test(contra)) {
      alert('Por favor, ingrese una contraseña válida (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial)');
      return false;
    }

    // Validar el campo "nombrescompletos"
    if (!regexNombres.test(nombrescompletos)) {
      alert("Por favor ingrese un nombre válido con 4 palabras separadas por un espacio, cada una empezando con una letra mayúscula y seguida de letras minúsculas");
      return false;
    }

    // Validar el campo "email"
    if (!regexEmail.test(email)) {
      alert('Por favor, ingrese una dirección de correo electrónico válida');
      return false;
    }

    // Validar el campo "telefono"
    if (!regexTelefono.test(telefono)) {
      alert('Por favor, ingrese un número de teléfono válido (10 dígitos)');
      return false;
    }

    // Validar el campo "direccion"
    if (!regexDireccion.test(direccion)) {
      alert('Por favor, ingrese una dirección válida (solo letras, números y algunos caracteres especiales)');
      return false;
    }

    // Si todos los campos son válidos, devolver "true" para enviar el formulario
    return true;
  }

}
