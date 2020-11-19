import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(){
    console.log("Se a envaido la data");
  }

}
