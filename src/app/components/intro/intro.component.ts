import { Component, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  faPencil = faPencil

  acercaDeMi: string = "...Soy un apasionado de la tecnología, tengo excelente manejo del portugués y el inglés, pero principalmente me encantan los nuevos desafíos y seguir aprendiendo constantemente...";
  nombre: string = "Guillermo Poggioni"
  titulo: string = "Full Stack Developer Jr."
  urlImagenPerfil: string = ""
  urlImagenBanner: string = ""
  constructor(){};

  ngOnInit(): void {};
  

}