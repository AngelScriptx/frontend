import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioUsuarioComponent } from './inicio-usuario/inicio-usuario.component';
import { EdificiosEstructurasComponent } from './edificios-estructuras/edificios-estructuras.component';
import { FormularioEdificioComponent } from './formulario-edificio/formulario-edificio.component';
import { FacultadesComponent } from './facultades/facultades.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { EquipamientoComponent } from './equipamiento/equipamiento.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { FiltroVehiculosPipe } from './filtro-vehiculos.pipe';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { FiltrotecnologiaPipe } from './filtro-tecnologias.pipe';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioUsuarioComponent,
    EdificiosEstructurasComponent,
    FormularioEdificioComponent,
    FacultadesComponent,
    ConfiguracionComponent,
    EquipamientoComponent,
    VehiculoComponent,
    FiltroVehiculosPipe,
    TecnologiaComponent,
    FiltrotecnologiaPipe,
    RegistroComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
