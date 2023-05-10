import { Component, OnInit } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyecto-element',
  templateUrl: './proyecto-element.component.html',
  styleUrls: ['./proyecto-element.component.css']
})
export class ProyectoElementComponent implements OnInit {
  
  proyectos:Iproyecto[] = [];

  constructor(
    private proyectoService : ProyectService
  ) {}
  
  ngOnInit(): void { 
    this.proyectoService.getProyectos().subscribe((proyectos) => 
    (this.proyectos = proyectos)); //método subscribe de los observables
  }

  deleteProyect(proyecto:Iproyecto) {
    console.log("deleteProject del componente Proy se ha llamado!")
    this.proyectoService.deleteProyect(proyecto)
    .subscribe( ()=> (
      this.proyectos = this.proyectos.filter ((e) => {
        return  e.id !== proyecto.id 
        })
    ))
  }

  

}
