import { Component, OnInit } from '@angular/core';
import { iPerfil } from 'src/app/iPerfil';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  perfiles : iPerfil[] = [];

  constructor(
    private perfilService : PerfilService
  ) {}
  
  ngOnInit(): void { 
    this.perfilService.getPerfil().subscribe((perfiles) => 
    (this.perfiles = perfiles)); //método subscribe de los observables
  }

}