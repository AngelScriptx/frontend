import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-edificio',
  templateUrl: './formulario-edificio.component.html',
  styleUrls: ['./formulario-edificio.component.css']
})
export class FormularioEdificioComponent implements OnInit {
  rutaImagen: string = '';
  edificioId: string = '';
  edificio: { ID: string, descripcion: string, valor: string, depreciacion: string, mantenimiento: string } | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rutaImagen = params['rutaImagen'];
      this.edificioId = params['edificioId'];
      this.edificio = this.edificios.find(e => e.ID === this.edificioId);
    });
  }

  edificios: { ID: string, descripcion: string, valor: string, depreciacion: string, mantenimiento: string }[] = [
    { ID: '1', descripcion: 'NuevaContra2', valor: 'Angel Mero Celorio', depreciacion: 'Angel Mero Celorio', mantenimiento: 'Angel Mero Celorio'},
    { ID: '2', descripcion: 'Edificio Grande', valor: '423442.00', depreciacion: '3%', mantenimiento: 'no'},
    { ID: '3', descripcion: 'Edificio Mediano', valor: '3123123.32', depreciacion: '14%', mantenimiento: 'si'},
    { ID: '4', descripcion: 'Edificio medianamente Grande', valor: '343212.34', depreciacion: '11%', mantenimiento: 'no'},
    { ID: '5', descripcion: 'Edificio amplio con 2 pisos', valor: '86567.39', depreciacion: '12%', mantenimiento: 'si'},
    { ID: '6', descripcion: 'Edificio con 3 plantas', valor: '34447.67', depreciacion: '6%', mantenimiento: 'no'},
    { ID: '7', descripcion: 'Edificio pequeño', valor: '324242.88', depreciacion: '13%', mantenimiento: 'no'},
    { ID: '8', descripcion: 'Edificio Grande', valor: '332452.66', depreciacion: '12%', mantenimiento: 'no'},
    { ID: '9', descripcion: 'Edificio Amplio', valor: '34234.22', depreciacion: '3%', mantenimiento: 'no'},
    { ID: '10', descripcion: 'Mediananamente Grande', valor: '22344.12', depreciacion: '9%', mantenimiento: 'si'},
    { ID: '11', descripcion: 'Grande  3 Edificio', valor: '33443.33', depreciacion: '4%', mantenimiento: 'si'},
    { ID: '12', descripcion: 'Grande Edificio', valor: '3243243.77', depreciacion: '9%', mantenimiento: 'si'},
    { ID: '13', descripcion: 'Edificio Mediano', valor: '4234324.99', depreciacion: '7%', mantenimiento: 'no'},
    { ID: '14', descripcion: 'Edificio Grande', valor: '577657657.12', depreciacion: '5%', mantenimiento: 'no'},
    { ID: '15', descripcion: 'Edificio Pequeño', valor: '32424332.44', depreciacion: '12%', mantenimiento: 'no'},
    { ID: '16', descripcion: 'Edificio Grande', valor: '4535435.66', depreciacion: '8%', mantenimiento: 'si'},
  ];

  enviarFormulario() {
    // Validación del campo descripción
    const descripcionRegex = /^[A-Za-z\s]+$/; // Solo letras y espacios
    if (!this.edificio || !descripcionRegex.test(this.edificio.descripcion)) {
      alert("La descripción es incorrecta. Solo se permiten letras y espacios.");
      return;
    }

    // Validación del campo valor
    const valorRegex = /^\d+\.\d{2}$/; // Número decimal con hasta 2 decimales
    if (!this.edificio || !valorRegex.test(this.edificio.valor)) {
      alert("El valor es incorrecto. Debe ser un números enteros válido con dos decimales.");
  return;
    }

    // Validación del campo depreciación
    const depreciacionRegex = /^(\d{1,2}(\.\d{1,2})?|25(\.0{1,2})?)%$/; // Número decimal con hasta 2 decimales o 25%
if (!this.edificio || !depreciacionRegex.test(this.edificio.depreciacion)) {
  alert("La depreciación es incorrecta. Debe ser un número decimal válido de hasta el 25%.");
  return;
}

    // Validación del campo mantenimiento
    if (!this.edificio || this.edificio.mantenimiento.length > 200) {
      alert("El mantenimiento es incorrecto. Solo se permiten un máximo de 200 caracteres.");
      return;
    }

    // Resto del código para enviar el formulario
  }
}