import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-equipamiento',
  templateUrl: './equipamiento.component.html',
  styleUrls: ['./equipamiento.component.css']
})
export class EquipamientoComponent {
  cantidadMobiliario: string = '';
  mantenimiento: string = '';

  submitForm(form: NgForm) {
    if (form.valid) {
      // Lógica para guardar los datos
      console.log('Formulario válido. Datos guardados:', form.value);
    }
  }
}
