import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { ProyectUiService } from 'src/app/services/proyect-ui.service';
import { Iproyecto } from 'src/app/iproyecto';

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent {
  //declaraciones de variables
  [x: string]: any;
  @Output() onAddProyect : EventEmitter<Iproyecto> = new EventEmitter();
  id:number = 0;
  nombre:string = "";
  descripcion:string = "";
  fecha:string = "";
  urlimagen:string = "";
  urlrepositorio:string = "";
  proyectos:Iproyecto [] = [];
    
  constructor( 
    private proyectService : ProyectService,
    private proyectUiService : ProyectUiService
  ) {}
  
  ngOnInit (): void {}
  
  onSubmit(){
    if(this.nombre.length === 0){
      alert("debes agregar un nombre de proyecto!")
      return
    }
    const { id, nombre, descripcion, fecha, urlimagen, urlrepositorio } = this 
    const newProy = { id, nombre, descripcion, fecha, urlimagen, urlrepositorio };

    this.onAddProyect.emit(newProy)

  }

}




