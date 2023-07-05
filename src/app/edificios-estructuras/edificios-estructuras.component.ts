import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edificios-estructuras',
  templateUrl: './edificios-estructuras.component.html',
  styleUrls: ['./edificios-estructuras.component.css']
})
export class EdificiosEstructurasComponent {
  rutaImagenSeleccionada!: string;
  edificioIdSeleccionada!: string;

  constructor(private router: Router) {} // Inyectar el servicio Router en el constructor

  guardarRutaImagen(rutaImagen: string, edificioId: string): void {
    this.rutaImagenSeleccionada = rutaImagen;
    this.edificioIdSeleccionada = edificioId;
  
    console.log('Ruta de la imagen:', this.rutaImagenSeleccionada);
    console.log('ID de la imagen:', this.edificioIdSeleccionada);
  
    this.router.navigate(['/formulario-Edificio', edificioId, this.rutaImagenSeleccionada]);
  }
}