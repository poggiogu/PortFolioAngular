import { Component, OnInit, Input } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { iPerfil } from 'src/app/iPerfil';
import { PerfilService } from 'src/app/services/perfil.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  @Input() perfil:iPerfil = {id:0, nombre:"", titulo: "", acercaDeMi : "", urlImagenPerfil : "", urlImagenBanner : ""};

  faPencil = faPencil

  constructor(
    private perfilService : PerfilService
  ){};

  ngOnInit(): void {
    
  };

}