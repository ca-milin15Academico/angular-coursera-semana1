import { Component, OnInit } from '@angular/core';
import {Tarea} from './../models/tarea-module';

@Component({
  selector: 'app-registrar-tarea',
  templateUrl: './registrar-tarea.component.html',
  styleUrls: ['./registrar-tarea.component.css']
})
export class RegistrarTareaComponent implements OnInit {

  listaTareas: Tarea[]

  constructor() {
    this.listaTareas = []
  }

  ngOnInit(): void {
  }

  almacenarTarea(titulo: string, porHacer: string): boolean{
    this.listaTareas.push(new Tarea(titulo, porHacer))
    return false;
  }

  seleccionarTareaFavorita(tarea: Tarea) {
    this.listaTareas.splice(this.listaTareas.indexOf(tarea), 1)
    tarea.setSelected(true)
    this.listaTareas.push(tarea)
  }
}
