import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NuevaTareaComponent } from './components/nueva-tarea/nueva-tarea.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { ListaTareaComponent } from './components/lista-tarea/lista-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaTareaComponent,
    TareaComponent,
    ListaTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
