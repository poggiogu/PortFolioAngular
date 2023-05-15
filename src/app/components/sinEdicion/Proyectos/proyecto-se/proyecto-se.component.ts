import { Component, Input,} from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyecto-se',
  templateUrl: './proyecto-se.component.html',
  styleUrls: ['./proyecto-se.component.css']
})
export class ProyectoSeComponent {

  proyectos:Iproyecto[] = [];

  @Input() proyecto:Iproyecto = {id:0, nombre:"", descripcion:"", fecha:"", urlImagen:"", urlRepositorio:""};

  constructor (
    private proyectoService : ProyectService
  ) {}; 

  ngOnInit(): void {
    this.proyectoService.getProyectos().subscribe((proyectos) => 
    (this.proyectos = proyectos)); //método subscribe de los observables
  };


}
