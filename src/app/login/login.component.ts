import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string;
  contrasena: string;

  usuarios: { usuario: string, contrasena: string, nombreCompleto: string }[] = [
    { usuario: 'Angel11', contrasena: 'NuevaContra2', nombreCompleto: 'Angel Mero Celorio' },
    { usuario: 'admin', contrasena: 'admin', nombreCompleto: 'Usuario Invitado' }
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.usuario = '';
    this.contrasena = '';
  }

  iniciarSesion() {
    // Obtener los valores de los campos del formulario
    const usuario = this.usuario.trim();
    const contra = this.contrasena.trim();

    // Validar los campos manualmente
    if (!this.validarUsuario(usuario)) {
      alert('Por favor, ingrese un nombre de usuario válido (solo letras, números, puntos, guiones bajos y guiones medios)');
      return;
    }

    if (!this.validarContrasena(contra)) {
      alert('Por favor, ingrese una contraseña válida (mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial)');
      return;
    }

    // Verificar la existencia del usuario
    const usuarioExistente = this.usuarios.find(u => u.usuario === usuario && u.contrasena === contra);

    if (usuarioExistente) {
      // Marcar al usuario como autenticado en el servicio AuthService
      this.authService.setAutenticado(true);
      this.authService.setUsuarioAutenticado(usuarioExistente.usuario, usuarioExistente.nombreCompleto);

      // Redirigir a la página de inicio de usuario
      this.router.navigate(['/facultades']);
    } else {
      // Mostrar un mensaje de error o realizar otra acción
      alert('Credenciales incorrectas');
    }
  }

  private validarUsuario(usuario: string): boolean {
    const regexUsuario = /^[a-zA-Z0-9._-]+$/; // Solo letras, números, puntos, guiones bajos y guiones medios
    return regexUsuario.test(usuario);
  }

  private validarContrasena(contra: string): boolean {
    const regexContra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // Mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número
    return regexContra.test(contra);
  }
}
