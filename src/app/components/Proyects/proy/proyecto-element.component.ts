import { Component, OnInit } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
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
    //como una promesa a futuro que el carrousel en este caso va a recibir la data necesaria
    //para poder construir sus objetos, en este caso cada slide!!
    this.proyectoService.getProyectos().subscribe((proyectos) => 
    (this.proyectos = proyectos)); //método subscribe de los observables
  }

  deleteProyect(proyecto:Iproyecto) {
    this.proyectoService.deleteProyect(proyecto)
    .subscribe( ()=> (
      this.proyectos = this.proyectos.filter ((p) => {
        return  p.id !== proyecto.id 
        })
    ))
  }

  addProyect(proyecto:Iproyecto){
    this.proyectoService.addProyect(proyecto).subscribe((proyecto)=>(
      this.proyectos.push(proyecto)
    ))
  }

}



  
  

  

