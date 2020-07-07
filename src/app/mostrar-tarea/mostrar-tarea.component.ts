import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Tarea } from './../models/tarea-module';

@Component({
  selector: 'app-mostrar-tarea',
  templateUrl: './mostrar-tarea.component.html',
  styleUrls: ['./mostrar-tarea.component.css']
})
export class MostrarTareaComponent implements OnInit {

  @Input() tarea: Tarea
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() tareaFavorita: EventEmitter<Tarea>;

  constructor() { 
    this.tareaFavorita = new EventEmitter();
  }

  ngOnInit(): void {
  }

  favorito(){
    this.tareaFavorita.emit(this.tarea);
  }
}
