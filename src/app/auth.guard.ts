import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './AuthService';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Verificar el estado de autenticación
    const usuarioAutenticado = this.authService.isAutenticado();

    if (usuarioAutenticado) {
      return true; // Permitir la navegación a la ruta protegida
    }

    // Si el usuario no está autenticado, redirigir al formulario de inicio de sesión
    return this.router.createUrlTree(['/login']);
  }
}
