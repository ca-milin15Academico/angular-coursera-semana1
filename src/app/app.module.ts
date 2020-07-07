import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarTareaComponent } from './registrar-tarea/registrar-tarea.component';
import { MostrarTareaComponent } from './mostrar-tarea/mostrar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarTareaComponent,
    MostrarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
