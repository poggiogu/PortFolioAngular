import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit{
  
  proyectos:Iproyecto[] = [];

  @Input() proyecto:Iproyecto = {id:0, nombre:"", descripcion:"", fecha:"", urlimagen:"", urlrepositorio:""};

  @Output() onDeleteProyect : EventEmitter<Iproyecto> = new EventEmitter()

  @Output() onGuardarCambios : EventEmitter<Iproyecto> = new EventEmitter()

  faTrash = faTrash;
  faPencil = faPencil;

  constructor (
    private proyectoService : ProyectService
  ) {}; 

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe((proyectos) => 
    (this.proyectos = proyectos)); //método subscribe de los observables
  };

  onDelete(proyecto: Iproyecto){
    console.log("onDelete de proyecto-item se ha llamado!")
    this.onDeleteProyect.emit(proyecto)
  }; 
  
  

}