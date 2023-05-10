import { Component, Input } from '@angular/core';
import { iPerfil } from 'src/app/iPerfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

  @Input() perfil:iPerfil = {id:0, nombre:"", titulo: "", acercaDeMi : "", urlImagenPerfil : "", urlImagenBanner : ""};

  constructor( 
    private perfilService : PerfilService 
  ) {}
  
  ngOnInit (): void { }

  onSubmit() {
    const updatedPerfil : iPerfil = {
      id: this.perfil.id,
      nombre: this.perfil.nombre,
      titulo: this.perfil.titulo,
      acercaDeMi: this.perfil.acercaDeMi,
      urlImagenPerfil: this.perfil.urlImagenPerfil,
      urlImagenBanner: this.perfil.urlImagenBanner
    };
    
    this.perfilService.updatePerfil(updatedPerfil).subscribe(
      () => {
        console.log("Edición Exitosa!!");
      },
      (error) => {
        console.log("Hubo un ERROR al intentar editar");
      }
    );
  }
}