import { Component, Input } from '@angular/core';
import { iPerfil } from 'src/app/iPerfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-intro-se',
  templateUrl: './intro-se.component.html',
  styleUrls: ['./intro-se.component.css']
})
export class IntroSeComponent {

  @Input() perfil:iPerfil = {id:0, nombre:"", titulo: "", acercaDeMi : "", urlImagenPerfil : "", urlImagenBanner : ""};

  constructor(
    private perfilService : PerfilService
  ){};

  ngOnInit(): void {
    
  };

}

