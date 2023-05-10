import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { Iproyecto } from 'src/app/iproyecto';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent {
 // [x: string]: any;

  @Input() proyecto:Iproyecto = {id:0, nombre:"", descripcion:"", fecha:"", urlimagen:"", urlrepositorio:""};

  constructor( 
    private proyectoService : ProyectService, 
  ) {}
  
  ngOnInit (): void {
    
  }

  onSubmit() {
    const updatedProyect: Iproyecto = {
      id: this.proyecto.id,
      nombre: this.proyecto.nombre,
      descripcion: this.proyecto.descripcion,
      fecha: this.proyecto.fecha,
      urlimagen: this.proyecto.urlimagen,
      urlrepositorio: this.proyecto.urlrepositorio
    };
  
    this.proyectoService.updateProyect(updatedProyect).subscribe(
      () => {
        console.log("Edición Exitosa!!");
      },
      (error) => {
        console.log("Hubo un ERROR al intentar editar");
      }
    );
  }

}
