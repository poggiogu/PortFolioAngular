import { Component } from '@angular/core';
import { Iproyecto } from 'src/app/iproyecto';
import { ProyectService } from 'src/app/services/proyect.service';


@Component({
  selector: 'app-add-proyecto-btn',
  templateUrl: './add-proyecto-btn.component.html',
  styleUrls: ['./add-proyecto-btn.component.css']
})

export class AddProyectoBtnComponent{
  [x: string]: any;

  proyectos : Iproyecto[] = [];
  
  constructor (
    private proyectoService : ProyectService,
   
  ) {}

  ngOnInit(): void {   
  }
  
  addProyecto(proyecto:Iproyecto){
    this.proyectoService.addProyect(proyecto).subscribe((proyecto)=>(
      this.proyectos.push(proyecto)
    ))
    console.log("proyecto creado correctamente!");
    
  }      
}