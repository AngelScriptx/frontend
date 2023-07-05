import { Component } from '@angular/core';
@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent {
   tecnologias = [
    {edificio: 'Ciencias de la Educación', activo: 'Laptop', marca: 'HP', modelo: 'Laptop', serie: 'ABC123456', estado: 'Bueno'},
    {edificio: 'Ciencias de la Educación', activo: 'Proyector', marca: 'Epson', modelo: 'Proyector', serie: 'DEF789012', estado: 'Bueno'},
    {edificio: 'Ciencias de la Educación', activo: 'Computadora', marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio: 'Ciencias de la Educación', activo: 'Laptop', marca: "Lenovo", modelo: "LIFEBOOK A3511", serie: "DEXX89012", estado: "Bueno"},
    {edificio: 'Ciencias de la Educación', activo: 'Aire', marca: 'Epson', modelo: 'Proyector', serie: 'DEF789012', estado: 'malo'},
    
    {edificio: 'Psicología', activo: 'Laptop', marca: 'HP', modelo: 'Laptop', serie: 'ABC123456', estado: 'Bueno'},
    {edificio: 'Psicología', activo: 'Proyector', marca: 'Epson', modelo: 'Proyector', serie: 'DEF789012', estado: 'Bueno'},
    {edificio: 'Psicología', activo: 'Computadora', marca: 'Epson', modelo: 'Proyector', serie: 'DEF789012', estado: 'Bueno'},
    {edificio: 'Psicología', activo: 'Aire', marca: 'Epson', modelo: 'Proyector', serie: 'DEF789012', estado: 'malo'},

    {edificio: "Trabajo Social",activo: "Laptop",marca: "HP",modelo: "Laptop",serie: "ABC123456",estado: "Bueno"},
    {edificio: "Trabajo Social",activo: "Proyector",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "Bueno"},
    {edificio: "Trabajo Social",activo: "Computadora",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "Bueno"},
    {edificio: "Trabajo Social",activo: "Aire",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "malo"},

    {edificio: "Ciencias Comunicacion",activo: "Laptop",marca: "HP",modelo: "Laptop",serie: "ABC123456",estado: "Bueno"},
    {edificio: "Ciencias Comunicacion",activo: "Proyector",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "Bueno"},
    {edificio: "Ciencias Comunicacion",activo: "Computadora",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "Bueno"},
    {edificio: "Ciencias Comunicacion",activo: "Aire",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "malo"},

    {edificio: "Derecho",activo: "Laptop",marca: "HP",modelo: "Laptop",serie: "ABC123456",estado: "Bueno"},
    {edificio: "Derecho",activo: "Proyector",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "Bueno"},
    {edificio: "Derecho",activo: "Computadora",marca: "Epson",modelo: "Proyector",serie: "DEF789012",estado: "Bueno"},
    {edificio: "Derecho",  activo: "Aire",  marca: "Epson",  modelo: "Proyector",  serie: "DEF789012",  estado: "malo"},
    
    {edificio: 'Contabilidad y Auditoría', activo: 'Laptop',marca: 'HP',modelo: 'Laptop', serie: 'ABC123456', estado: 'Bueno'},
    {edificio: 'Contabilidad y Auditoría',activo: 'Proyector',marca: 'Epson',modelo: 'Proyector',serie: 'DEF789012',estado: 'Bueno'},
    {edificio: 'Contabilidad y Auditoría',activo: 'Computadora',marca: 'Epson',modelo: 'Proyector',serie: 'DEF789012',estado: 'Bueno'},
    {edificio: 'Contabilidad y Auditoría',activo: 'Aire',marca: 'Epson',modelo: 'Proyector',serie: 'DEF789012',estado: 'malo'},
    
    {edificio: 'Ingeniería Industrial',activo: 'Laptop',marca: 'HP',modelo: 'Laptop',serie: 'ABC123456',estado: 'Bueno'},
    {edificio: 'Ingeniería Industrial',activo: 'Proyector',marca: 'Epson',modelo: 'Proyector',serie: 'DEF789012',estado: 'Bueno'},
    {edificio: 'Ingeniería Industrial',activo: 'Computadora',marca: 'Epson',modelo: 'Proyector',serie: 'DEF789012',estado: 'Bueno'},
    {edificio: 'Ingeniería Industrial',activo: 'Aire',marca: 'Epson',modelo: 'Proyector',serie: 'DEF789012',estado: 'malo'},

    {edificio:"Ciencias Economicas",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Ciencias Economicas",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Economicas",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Economicas",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 
    
    {edificio:"Ciencias Médicas",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Ciencias Médicas",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Médicas",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Médicas",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 

    {edificio:"Ciencias Informáticas",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Ciencias Informáticas",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Informáticas",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Informáticas",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 

    {edificio:"Ingeniería",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Ingeniería",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ingeniería",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ingeniería",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 

    {edificio:"Ciencias Agropecuarias",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Ciencias Agropecuarias",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Agropecuarias",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Agropecuarias",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 
 
    {edificio:"Arquitectura",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Arquitectura",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Arquitectura",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Arquitectura",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 

    {edificio:"Ciencias Médicas",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Ciencias Médicas",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Médicas",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Ciencias Médicas",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 

    {edificio:"Odontología",activo: "Laptop", marca: "HP", modelo: "Laptop", serie: "ABC123456", estado: "Bueno" },
    {edificio:"Odontología",activo: "Proyector", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Odontología",activo: "Computadora", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "Bueno"},
    {edificio:"Odontología",activo: "Aire", marca: "Epson", modelo: "Proyector", serie: "DEF789012", estado: "malo"}, 

  ];
  filtroEdificio: string = '';
  filtroActivo: string = '';
  mostrarNuevoFormulario: boolean = false;
   nuevoEdificio: string = '';
  nuevoActivo: string = '';
  nuevaMarca: string = '';
  nuevoModelo: string = '';
  nuevoSerie: string = '';
  nuevoEstado: string = '';
 
  mostrarFormulario() {
    this.mostrarNuevoFormulario = true;
  }
  
  eliminarTecno(tecno: any) {
    // Se obtiene el índice del vehículo dentro del arreglo de vehículos
    const index = this.tecnologias.indexOf(tecno);
  
    // Se verifica si el índice es válido (-1 indica que no se encontró el vehículo en el arreglo)
    if (index !== -1) {
      // Se utiliza el método splice para eliminar 1 elemento a partir del índice encontrado
      this.tecnologias.splice(index, 1);
    }
  }
  enviarFormulario() {
    // Validar el formulario aquí utilizando expresiones regulares o cualquier otra lógica
    const marcaRegex = /^[A-Za-z0-9 ]{1,10}$/;
    if (!marcaRegex.test(this.nuevaMarca)) {
      alert("La marca es incorrecta. Debe contener máximo 10 caracteres alfanuméricos, sin caracteres especiales ni espacios.");
      return; // Salir de la función si la validación falla
    }
  
     // Validación del campo nuevoModelo
  const nuevoModelo = /^[A-Za-z0-9 ]{1,15}$/;
  if (!marcaRegex.test(this.nuevoModelo)) {
    alert("La marca es incorrecta. Debe contener máximo 10 caracteres alfanuméricos, sin caracteres especiales ni espacios.");
    return; // Salir de la función si la validación falla
  }
    // Validación del campo nuevoSerie
    const serieRegex = /^[A-Z0-9]{1,9}$/; // Expresión regular para validar las condiciones
    if (!serieRegex.test(this.nuevoSerie)) {
      alert("El número de serie es incorrecto. Debe contener máximo 9 dígitos, solo letras mayúsculas y números sin espacios.");
      return; // Salir de la función si la validación falla
    }
      // Validación del campo nuevoEstado
      const estadoRegex = /^(Bueno|Malo|Mantenimiento)$/;
      if (!estadoRegex.test(this.nuevoEstado)) {
        alert("El estado es incorrecto. Solo se permiten las opciones: Bueno, Malo o Mantenimiento.");
        return; // Salir de la función si la validación falla
      }

    // Agregar los datos al arreglo de tecnologías
    const nuevoDato = {
      edificio: this.nuevoEdificio,
      activo: this.nuevoActivo,
      marca: this.nuevaMarca,
      modelo: this.nuevoModelo,
      serie: this.nuevoSerie,
      estado: this.nuevoEstado
    };
    this.tecnologias.push(nuevoDato);

    // Mostrar el mensaje "Datos Agregados"
    alert("Datos Agregados");

    // Reiniciar los campos del formulario
    this.nuevoEdificio = '';
    this.nuevoActivo = '';
    this.nuevaMarca = '';
    this.nuevoModelo = '';
    this.nuevoSerie = '';
    this.nuevoEstado = '';

    // Ocultar el formulario
    this.mostrarNuevoFormulario = false;
  }
}


