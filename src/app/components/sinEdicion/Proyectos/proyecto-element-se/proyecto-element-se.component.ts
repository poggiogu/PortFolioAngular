import { Component, OnInit } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-proyecto-element-se',
  templateUrl: './proyecto-element-se.component.html',
  styleUrls: ['./proyecto-element-se.component.css']
})
export class ProyectoElementSeComponent {

  proyectos:Iproyecto[] = [];

  constructor(
    private proyectoService : ProyectService
  ) {}
  
  ngOnInit(): void { 
    //como una promesa
    this.proyectoService.getProyectos().subscribe((proyectos) => 
    (this.proyectos = proyectos)); //método subscribe de los observables
  }

}

