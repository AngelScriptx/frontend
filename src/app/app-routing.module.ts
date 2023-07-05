import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { AuthGuard } from './auth.guard';
import { EdificiosEstructurasComponent } from './edificios-estructuras/edificios-estructuras.component';
import { FormularioEdificioComponent } from './formulario-edificio/formulario-edificio.component';
import { FacultadesComponent } from './facultades/facultades.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { EquipamientoComponent } from './equipamiento/equipamiento.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { RegistroComponent } from './registro/registro.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio-usuario', component: InicioUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'edificios-estructuras', component: EdificiosEstructurasComponent },
  {path: 'formulario-Edificio/:edificioId/:rutaImagen',component: FormularioEdificioComponent},
  { path: 'facultades', component: FacultadesComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'equipamiento', component: EquipamientoComponent },
  { path: 'vehiculo', component: VehiculoComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'registro', component: RegistroComponent },
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
