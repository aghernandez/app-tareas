import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  nId = 4;
  nuevaTarea = {
    id: this.nId,
    title: '',
    description: ''
  }

  constructor(private listService: TareaService) { }

  ngOnInit(): void {
  }

  addTarea(){
    console.log("Se a envaido la data", this.nuevaTarea);
    this.listService .addTarea(this.nuevaTarea)
    this.nId ++;
    this.nuevaTarea = {
      id:0,
      title: '',
      description: ''
    }
  }

}
