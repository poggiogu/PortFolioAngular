import { Component, OnInit } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-add-proyecto-btn',
  templateUrl: './add-proyecto-btn.component.html',
  styleUrls: ['./add-proyecto-btn.component.css']
})
export class AddProyectoBtnComponent implements OnInit {
  
  proyectos : Iproyecto[] = [];
  
  constructor (
    private proyectoService : ProyectService
  ) {}

  ngOnInit(): void { 
    //como una promesa
    this.proyectoService.getProyectos().subscribe((proyectos) => 
    (this.proyectos = proyectos)); //método subscribe de los observables
  }
  
  addProyecto(proyecto:Iproyecto){
    this.proyectoService.addProyect(proyecto).subscribe((proyecto)=>(
      this.proyectos.push(proyecto)
    ))
  }      
}