import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.component.html',
  styleUrls: ['./lista-tarea.component.css']
})
export class ListaTareaComponent implements OnInit {

  miTarea: Tarea[];

  constructor(private listService : TareaService) { }

  ngOnInit(): void {
    this.miTarea = this.listService.getTareas();
    console.log("Mis tareas:", this.miTarea);
  }

}
