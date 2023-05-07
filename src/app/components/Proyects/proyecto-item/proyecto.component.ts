import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { PROYECTOS } from 'src/app/MockExp';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {

  @Input() proyecto:Iproyecto = PROYECTOS[0];
  @Output() onDeleteProyecto : EventEmitter<Iproyecto> = new EventEmitter()

  faTrash = faTrash;
  faPencil = faPencil;

  constructor () {}; 

  ngOnInit(): void {
    
  };

  onDelete(proyecto:Iproyecto){
    this.onDeleteProyecto.emit(proyecto)
  };   

}