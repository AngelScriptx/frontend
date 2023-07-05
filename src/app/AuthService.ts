import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private autenticado: boolean;
  private usuarioAutenticado: { usuario: string; nombreCompleto: string };

  constructor() {
    this.autenticado = false;
    this.usuarioAutenticado = { usuario: '', nombreCompleto: '' };
  }

  isAutenticado(): boolean {
    return this.autenticado;
  }

  setAutenticado(estado: boolean): void {
    this.autenticado = estado;
  }

  setUsuarioAutenticado(usuario: string, nombreCompleto: string): void {
    this.usuarioAutenticado.usuario = usuario;
    this.usuarioAutenticado.nombreCompleto = nombreCompleto;
  }

  getUsuarioAutenticado(): { usuario: string; nombreCompleto: string } {
    return this.usuarioAutenticado;
  }

  cerrarSesion(): void {
    this.autenticado = false;
    this.usuarioAutenticado = { usuario: '', nombreCompleto: '' };
  }
}
