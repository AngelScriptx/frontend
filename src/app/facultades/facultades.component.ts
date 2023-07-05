import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html',
  styleUrls: ['./facultades.component.css']
})
export class FacultadesComponent {
  cuadros: any[] = [
    { facultad: 'FACULTAD CIENCIAS DE LA SALUD', imagen: 'assets/CIENCIASDELASALUD.png', edificios: ['Medicina', 'Odontología','Enfermería','Fisioterapia','Fonoaudiología','Laboratorio Clínico','Terapia Ocupacional','Psicología'] },
    { facultad: 'FACULTAD CIENCIAS ADMINISTRATIVAS, CONTABLES Y COMERCIO', imagen: 'assets/CONTABLESYCOMERCIO.png', edificios: ['Administración de Empresas','Mercadotecnia','Contabilidad y Auditoria','Auditoria y Control de Gestión','Finanzas','Comercio Exterior','Gestión de Información Gerencial'] },
    { facultad: 'FACULTAD DE EDUCACIÓN TURISMO ARTES Y HUMANIDADES', imagen: 'assets/EDUCACIONTURISMOARTES YHUMANIDADES.png', edificios: ['Educación Inicial','Educación Especial','Psicología Educativa','Educación Básica','Pedagogía de la Actividad Física y el Deporte','Pedagogía de la Lengua y la Literatura','Pedagogía de los Idiomas Nacionales y Extranjeros','Turismo','Hospitalidad y Hotelería','Artes Plásticas','Sociología'] },
    { facultad: 'FACULTAD INGENIERÍA, INDUSTRIA Y CONSTRUCCIÓN', imagen: 'assets/INDUSTRIAYCONSTRUCCION.png', edificios: ['Ingenieria Civil', 'Ingenieria Marítima','Electricidad','Arquitectura','Ingeniería Industrial','Ingeniería de Alimentos'] },
    { facultad: 'FACULTAD CIENCIAS DE LA VIDA Y TECNOLOGÍAS', imagen: 'assets/CIENCIASDELAVIDAYTECNOLOGÍAS.png', edificios: ['Ingeneria Agropecuaria','Agronegocios','Ingenieria Agroindustrial','Ingeniería Ambiental','Ingeniería en Tecnologías de la información','Ingenieria en Software','Ingeniería en Sistema','Biología'] },
    { facultad: 'FACULTAD CIENCIAS SOCIALES DERECHO Y BIENESTAR', imagen: 'assets/CIENCIAS SOCIALES DERECHO Y BIENESTAR.png', edificios: ['Derecho','Economía','Trabajo','Comunicación',] },
  ];

}  