import { Component } from '@angular/core';
import { iPerfil } from 'src/app/iPerfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil-se',
  templateUrl: './perfil-se.component.html',
  styleUrls: ['./perfil-se.component.css']
})
export class PerfilSeComponent {
  perfiles : iPerfil[] = [];

  constructor(
    private perfilService : PerfilService
  ) {}
  
  ngOnInit(): void { 
    this.perfilService.getPerfil().subscribe((perfiles) => 
    (this.perfiles = perfiles)); //método subscribe de los observables
  }



}