import { Component, Output, EventEmitter } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { Iproyecto } from 'src/app/iproyecto';

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent {

  [x: string]: any;

  @Output() onAddProyect : EventEmitter<Iproyecto> = new EventEmitter();
  //inicializacion de las variables
  id:number = 0;
  nombre:string = "";
  descripcion:string = "";
  fecha:string = "";
  urlImagen:string = "";
  urlRepositorio:string = "";
      
  constructor( 
    private proyectService : ProyectService, 
  ) {}
  
  ngOnInit (): void {}
  
  onSubmit(){
    if(this.nombre.length === 0){
      alert("debes agregar un nombre de proyecto!")
      return
    }
    const {  id, nombre, descripcion, fecha, urlImagen, urlRepositorio } = this 
    const newProyect = {  id, nombre, descripcion, fecha, urlImagen, urlRepositorio };

    this.onAddProyect.emit(newProyect)

  }

}
