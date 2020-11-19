import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

const ListaTareas = [
  {
  "id": 1,
  "title": "Agregar, correos",
  "description": "Agregar los nuevos correos de los clientes a la bd"

},
{
  "id": 2,
  "title": "Llamar a distribuidor",
  "description": "Realizar llamadas para darle continuidad a las nuevas compras"

},
{
  "id": 3,
  "title": "Agendar reuniones",
  "description": "Ver calendario para agregar nuevas reuniones"

},

]

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }

  getTareas (){
    return ListaTareas;
  }

  getTarea (_id){
    return ListaTareas.find(tarea =>tarea.id === _id);
  }

  addTarea(tarea: Tarea){
    ListaTareas.push(tarea);
  }

  editTarea(editarTarea){
    const index = ListaTareas.findIndex(tarea =>tarea.id ===editarTarea.id);

    ListaTareas[index] = editarTarea;
  }

  deleteTarea(_id){
    ListaTareas.splice(_id,1);
  }
}
